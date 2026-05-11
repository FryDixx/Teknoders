import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const apiKey = process.env.OPENAI_API_KEY;
const client = apiKey ? new OpenAI({ apiKey }) : null;






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
const forwarded = request.headers.get('x-forwarded-for');

const ip =
  request.headers.get('x-real-ip') ||
  request.headers.get('x-forwarded-for')?.split(',')[0] ||
  crypto.randomUUID();  
  console.log('FORWARDED:', forwarded);
console.log('IP:', ip);

    

    const body = await request.json();
    const authHeader = request.headers.get('authorization');

let user = null;

if (authHeader) {
  const token = authHeader.replace('Bearer ', '');

  const {
    data: { user: currentUser },
  } = await supabase.auth.getUser(token);
  console.log('USER:', user);
console.log('IP:', ip);

  user = currentUser;
}

const todayStart = new Date();
todayStart.setHours(0, 0, 0, 0);

let usageQuery = supabase
  .from('note_usage')
  .select('*', { count: 'exact', head: true })
  .gte('created_at', todayStart.toISOString());

if (user) {
  usageQuery = usageQuery.eq('user_id', user.id);
} else {
  usageQuery = usageQuery.eq('ip', ip);
}

const { count } = await usageQuery;
console.log('COUNT:', count);
console.log('USER:', user?.id);
console.log('IP:', ip);

console.log('LIMIT BYPASS ACTIVE');
const limit = 999999;

const insertResult = await supabase
  .from('note_usage')
  .insert({
    user_id: user?.id || null,
    ip,
  });

console.log(insertResult);
console.log('INSERTED');
    


if (authHeader) {
  const token = authHeader.replace('Bearer ', '');

  const {
    data: { user: currentUser },
  } = await supabase.auth.getUser(token);

  user = currentUser;
}
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
    if (user) {
  await supabase.from('saved_notes').insert({
    user_id: user.id,
    lesson,
    topic,
    note,
  });
}

    if (!note) {
      return Response.json(
        { error: 'AI cevap verdi ama ders notu boş geldi.' },
        { status: 500 }
      );
    }


    return Response.json({
  note,
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