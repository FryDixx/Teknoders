import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
const client = apiKey ? new OpenAI({ apiKey }) : null;

const DAILY_LIMIT = 5;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

globalThis.aiUsageStore = globalThis.aiUsageStore || new Map();

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return 'local-user';
}

function checkDailyLimit(ip) {
  const now = Date.now();
  const usage = globalThis.aiUsageStore.get(ip);

  if (!usage || now - usage.startedAt > ONE_DAY_MS) {
    globalThis.aiUsageStore.set(ip, {
      count: 0,
      startedAt: now,
    });

    return {
      allowed: true,
      remaining: DAILY_LIMIT,
    };
  }

  const remaining = Math.max(0, DAILY_LIMIT - usage.count);

  return {
    allowed: usage.count < DAILY_LIMIT,
    remaining,
  };
}

function increaseUsage(ip) {
  const now = Date.now();
  const usage = globalThis.aiUsageStore.get(ip);

  if (!usage || now - usage.startedAt > ONE_DAY_MS) {
    globalThis.aiUsageStore.set(ip, {
      count: 1,
      startedAt: now,
    });

    return DAILY_LIMIT - 1;
  }

  usage.count += 1;
  globalThis.aiUsageStore.set(ip, usage);

  return Math.max(0, DAILY_LIMIT - usage.count);
}

function cleanGeneratedNote(text) {
  if (!text) return '';

  let cleaned = text
    // Markdown başlıklarını temizle: # Başlık
    .replace(/^#{1,6}\s*/gm, '')

    // Kalın/italik işaretlerini temizle: **kelime**, *kelime*
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')

    // Kod işaretlerini temizle
    .replace(/`{1,3}([^`]+)`{1,3}/g, '$1')

    // Markdown liste çizgilerini daha temiz maddeye çevir
    .replace(/^\s*[-]\s+/gm, '• ')

    // Fazla boşlukları azalt
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const lines = cleaned.split('\n');

  while (lines.length > 0) {
    const lastLine = lines[lines.length - 1].toLowerCase().trim();

    const isChattyEnding =
      lastLine.includes('yardımcı') ||
      lastLine.includes('başka bir şey') ||
      lastLine.includes('başka bir konuda') ||
      lastLine.includes('devam edebilirim') ||
      lastLine.includes('hazırlayabilirim') ||
      lastLine.includes('söylemen yeterli');

    if (isChattyEnding) {
      lines.pop();
    } else {
      break;
    }
  }

  return lines.join('\n').trim();
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    const limitStatus = checkDailyLimit(ip);

    if (!limitStatus.allowed) {
      return Response.json(
        {
          error:
            'Günlük AI not oluşturma limitine ulaştın. Bugün en fazla 5 AI not oluşturabilirsin. Yarın tekrar deneyebilirsin.',
          remaining: 0,
          limit: DAILY_LIMIT,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { grade, lesson, topic, level, outputType, extra } = body;

    if (!lesson || !topic) {
      return Response.json(
        { error: 'Ders ve konu seçilmesi gerekiyor.' },
        { status: 400 }
      );
    }

    if (!client) {
      return Response.json(
        {
          error:
            'OpenAI API key okunamadı. .env.local dosyasında OPENAI_API_KEY değerini kontrol et.',
        },
        { status: 500 }
      );
    }

    const prompt = `
Sen Türkçe eğitim içeriği hazırlayan yardımcı bir öğretmensin.

Kullanıcı için açık, güvenilir, düzenli ve sınav odaklı bir ders notu hazırla.

ÇOK ÖNEMLİ FORMAT KURALLARI:
- Markdown kullanma.
- Başlıklarda # kullanma.
- Kalın yazı için ** kullanma.
- İtalik yazı için * kullanma.
- Kod bloğu, backtick veya özel Markdown işaretleri kullanma.
- Cevabın sadece ders notu olsun.
- Cevabın başına "Tabii", "Elbette", "İşte" gibi giriş cümlesi koyma.
- Cevabın sonuna "başka yardımcı olmamı istediğin..." gibi sohbet cümlesi koyma.
- Sadece istenen ders içeriğini yaz.
- Gereksiz uzun yazma.
- Öğrenciyi bunaltma.
- Bilmediğin konuda kesin konuşma.
- Telifli bir kaynağı birebir kopyalama.

Yazım formatı:
1. Konunun Kısa Özeti
Bu bölümde konuyu sade şekilde anlat.

2. Temel Mantık
Konunun ana fikrini öğrencinin anlayacağı dille açıkla.

3. Önemli Noktalar / Formüller / Kavramlar
Gerekirse madde madde yaz. Madde için sadece şu sembolü kullan: •

4. Sınavda Nasıl Sorulur?
Soru tarzlarını açıkla.

5. Sık Yapılan Hatalar
Öğrencilerin karıştırdığı noktaları yaz.

6. Mini Örnekler
Kısa ve anlaşılır örnekler ver.

7. 5 Soruluk Mini Tekrar Testi
5 kısa soru yaz.

8. Cevap Anahtarı
Cevapları açıkça yaz.

9. 20 Dakikalık Çalışma Planı
Öğrencinin nasıl tekrar yapacağını dakikalara böl.

Kullanıcı bilgileri:
- Sınıf / Alan: ${grade}
- Ders: ${lesson}
- Konu: ${topic}
- Seviye: ${level}
- Çıktı Türü: ${outputType}
- Ek İstek: ${extra || 'Yok'}
`;

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5.4-mini',
      input: prompt,
    });

    const rawNote = response.output_text?.trim();
    const note = cleanGeneratedNote(rawNote);

    if (!note) {
      return Response.json(
        { error: 'AI cevap verdi ama ders notu boş geldi.' },
        { status: 500 }
      );
    }

    const remaining = increaseUsage(ip);

    return Response.json({
      note,
      remaining,
      limit: DAILY_LIMIT,
    });
  } catch (error) {
    console.error('OPENAI HATASI:', error);

    return Response.json(
      {
        error:
          error?.message ||
          'OpenAI bağlantısında hata oluştu. API key, billing veya model adını kontrol et.',
      },
      { status: 500 }
    );
  }
}