# Teknoders Starter

Bu proje, öğrenciler için AI ders notu oluşturucu + basit hesaplama araçları içeren başlangıç sitesidir.

## 1) Gerekenler

- Node.js kurulu olmalı.
- Bir OpenAI API anahtarı gerekir.

## 2) Kurulum

Terminali bu klasörde aç ve şunları yaz:

```bash
npm install
```

Sonra `.env.example` dosyasını kopyala ve adını `.env.local` yap.

İçine kendi API anahtarını yaz:

```env
OPENAI_API_KEY=buraya_api_key_yazilacak
OPENAI_MODEL=gpt-5.5
```

## 3) Çalıştırma

```bash
npm run dev
```

Sonra tarayıcıda şunu aç:

```text
http://localhost:3000
```

## 4) Yayına alma

İlk aşamada Vercel gibi Next.js destekleyen bir platform kullanılabilir.
API anahtarını kodun içine yazma. Yayınladığın platformun Environment Variables alanına ekle.

## 5) AdSense / reklam

Reklam hesabı için yaş ve politika şartlarını kontrol et. 18 yaş altındaysan ebeveyn/vasinin hesabı gerekir.
