'use client';

import { supabase } from './lib/supabase';
import { useEffect, useRef, useState } from 'react';

const curriculum = {
  LGS: {
    Matematik: [
      'Çarpanlar ve Katlar',
      'Üslü İfadeler',
      'Kareköklü İfadeler',
      'Veri Analizi',
      'Basit Olayların Olma Olasılığı',
      'Cebirsel İfadeler ve Özdeşlikler',
      'Doğrusal Denklemler',
      'Eşitsizlikler',
      'Üçgenler',
      'Eşlik ve Benzerlik',
      'Dönüşüm Geometrisi',
      'Geometrik Cisimler',
    ],
    'Fen Bilimleri': [
      'Mevsimler ve İklim',
      'DNA ve Genetik Kod',
      'Basınç',
      'Madde ve Endüstri',
      'Basit Makineler',
      'Enerji Dönüşümleri ve Çevre Bilimi',
      'Elektrik Yükleri ve Elektrik Enerjisi',
    ],
    Türkçe: [
      'Sözcükte Anlam',
      'Cümlede Anlam',
      'Paragraf',
      'Fiilimsi',
      'Cümlenin Ögeleri',
      'Yazım Kuralları',
      'Noktalama İşaretleri',
      'Metin Türleri',
      'Sözel Mantık',
    ],
    'T.C. İnkılap Tarihi': [
      'Bir Kahraman Doğuyor',
      'Milli Uyanış',
      'Milli Bir Destan',
      'Atatürkçülük ve Çağdaşlaşan Türkiye',
      'Demokratikleşme Çabaları',
      'Atatürk Dönemi Türk Dış Politikası',
    ],
    İngilizce: [
      'Friendship',
      'Teen Life',
      'In The Kitchen',
      'On The Phone',
      'The Internet',
      'Adventures',
      'Tourism',
      'Chores',
      'Science',
      'Natural Forces',
    ],
    'Din Kültürü': [
      'Kader İnancı',
      'Zekat ve Sadaka',
      'Din ve Hayat',
      'Hz. Muhammed’in Örnekliği',
      'Kur’an-ı Kerim ve Özellikleri',
    ],
  },

  '9. Sınıf': {
    Matematik: [
      'Sayılar',
      'Nicelikler ve Değişimler',
      'Algoritma ve Bilişim',
      'Geometrik Şekiller',
      'Eşlik ve Benzerlik',
      'İstatistiksel Araştırma Süreci',
      'Veriden Olasılığa',
    ],
    Fizik: [
      'Fizik Bilimine Giriş',
      'Madde ve Özellikleri',
      'Hareket ve Kuvvet',
      'Enerji',
      'Isı ve Sıcaklık',
      'Elektrostatik',
    ],
    Kimya: [
      'Kimya Bilimi',
      'Atom ve Periyodik Sistem',
      'Kimyasal Türler Arası Etkileşimler',
      'Maddenin Halleri',
      'Doğa ve Kimya',
    ],
    Biyoloji: ['Yaşam Bilimi Biyoloji', 'Hücre', 'Canlılar Dünyası'],
    Tarih: [
      'Tarih ve Zaman',
      'İnsanlığın İlk Dönemleri',
      'Orta Çağ’da Dünya',
      'İlk ve Orta Çağlarda Türk Dünyası',
      'İslam Medeniyetinin Doğuşu',
      'Türklerin İslamiyet’i Kabulü',
    ],
    Coğrafya: [
      'Doğa ve İnsan',
      'Dünya’nın Şekli ve Hareketleri',
      'Harita Bilgisi',
      'Atmosfer ve İklim',
      'Yer Şekilleri',
      'Nüfus ve Yerleşme',
    ],
    Edebiyat: [
      'Giriş',
      'Hikaye',
      'Şiir',
      'Masal ve Fabl',
      'Roman',
      'Tiyatro',
      'Biyografi ve Otobiyografi',
      'Mektup ve E-Posta',
      'Günlük ve Blog',
    ],
  },

  '10. Sınıf': {
    Matematik: [
      'Sayma ve Olasılık',
      'Fonksiyonlar',
      'Polinomlar',
      'İkinci Dereceden Denklemler',
      'Dörtgenler ve Çokgenler',
      'Katı Cisimler',
    ],
    Fizik: ['Elektrik ve Manyetizma', 'Basınç ve Kaldırma Kuvveti', 'Dalgalar', 'Optik'],
    Kimya: [
      'Kimyanın Temel Kanunları',
      'Karışımlar',
      'Asitler, Bazlar ve Tuzlar',
      'Kimya Her Yerde',
    ],
    Biyoloji: [
      'Hücre Bölünmeleri',
      'Kalıtım',
      'Ekosistem Ekolojisi',
      'Güncel Çevre Sorunları',
    ],
    Tarih: [
      'Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi',
      'Beylikten Devlete Osmanlı',
      'Dünya Gücü Osmanlı',
      'Osmanlı Kültür ve Medeniyeti',
    ],
    Coğrafya: [
      'Dünya’nın Tektonik Oluşumu',
      'İç ve Dış Kuvvetler',
      'Su, Toprak ve Bitkiler',
      'Nüfus',
      'Göç',
      'Ekonomik Faaliyetler',
    ],
    Edebiyat: [
      'Hikaye',
      'Şiir',
      'Destan ve Efsane',
      'Roman',
      'Tiyatro',
      'Anı',
      'Haber Metni',
      'Gezi Yazısı',
    ],
  },

  '11. Sınıf Sayısal': {
    Matematik: [
      'Trigonometri',
      'Analitik Geometri',
      'Fonksiyonlarda Uygulamalar',
      'Denklem ve Eşitsizlik Sistemleri',
      'Çember ve Daire',
      'Uzay Geometri',
      'Olasılık',
    ],
    Fizik: ['Kuvvet ve Hareket', 'Elektrik ve Manyetizma'],
    Kimya: [
      'Modern Atom Teorisi',
      'Gazlar',
      'Sıvı Çözeltiler',
      'Kimyasal Tepkimelerde Enerji',
      'Kimyasal Tepkimelerde Hız',
      'Kimyasal Denge',
    ],
    Biyoloji: ['İnsan Fizyolojisi', 'Komünite ve Popülasyon Ekolojisi'],
  },

  '11. Sınıf EA/Sözel': {
    Matematik: [
      'Trigonometri',
      'Analitik Geometri',
      'Fonksiyonlarda Uygulamalar',
      'Denklem ve Eşitsizlik Sistemleri',
    ],
    Edebiyat: [
      'Edebiyat ve Toplum',
      'Şiir',
      'Hikaye',
      'Roman',
      'Tiyatro',
      'Eleştiri',
      'Mülakat',
      'Röportaj',
    ],
    Tarih: [
      'Değişen Dünya Dengeleri',
      'Değişim Çağında Avrupa ve Osmanlı',
      'Uluslararası İlişkilerde Denge Stratejisi',
    ],
    Coğrafya: [
      'Biyoçeşitlilik',
      'Ekosistem',
      'Nüfus Politikaları',
      'Şehirler',
      'Ekonomik Faaliyetler',
      'Türkiye Ekonomisi',
    ],
    Felsefe: [
      'Felsefeye Giriş',
      'Bilgi Felsefesi',
      'Varlık Felsefesi',
      'Ahlak Felsefesi',
      'Siyaset Felsefesi',
      'Din Felsefesi',
      'Bilim Felsefesi',
    ],
  },

  '12. Sınıf Sayısal': {
    Matematik: [
      'Üstel ve Logaritmik Fonksiyonlar',
      'Diziler',
      'Limit',
      'Türev',
      'İntegral',
      'Trigonometri Tekrar',
      'Analitik Geometri Tekrar',
    ],
    Fizik: [
      'Çembersel Hareket',
      'Basit Harmonik Hareket',
      'Dalga Mekaniği',
      'Atom Fiziğine Giriş',
      'Modern Fizik',
      'Modern Fiziğin Teknolojideki Uygulamaları',
    ],
    Kimya: [
      'Kimya ve Elektrik',
      'Karbon Kimyasına Giriş',
      'Organik Bileşikler',
      'Enerji Kaynakları ve Bilimsel Gelişmeler',
    ],
    Biyoloji: [
      'Genden Proteine',
      'Canlılarda Enerji Dönüşümleri',
      'Bitki Biyolojisi',
      'Canlılar ve Çevre',
    ],
  },

  '12. Sınıf EA/Sözel': {
    Matematik: ['Üstel ve Logaritmik Fonksiyonlar', 'Diziler', 'Limit', 'Türev', 'İntegral'],
    Edebiyat: [
      'Cumhuriyet Dönemi Şiiri',
      'Cumhuriyet Dönemi Romanı',
      'Cumhuriyet Dönemi Hikayesi',
      'Dünya Edebiyatı',
      'Tiyatro',
      'Deneme',
      'Söylev',
    ],
    Tarih: [
      '20. Yüzyıl Başlarında Osmanlı',
      'Milli Mücadele',
      'Atatürkçülük',
      'İki Savaş Arasındaki Dönem',
      'II. Dünya Savaşı',
      'Soğuk Savaş',
      'Küreselleşen Dünya',
    ],
    Coğrafya: [
      'Doğal Sistemler',
      'Beşeri Sistemler',
      'Küresel Ortam',
      'Ülkeler ve Bölgeler',
      'Çevre ve Toplum',
    ],
    Felsefe: ['Mantık', 'Psikoloji', 'Sosyoloji'],
  },

  TYT: {
    Türkçe: [
      'Sözcükte Anlam',
      'Cümlede Anlam',
      'Paragraf',
      'Ses Bilgisi',
      'Yazım Kuralları',
      'Noktalama İşaretleri',
      'Sözcük Türleri',
      'Cümlenin Ögeleri',
      'Anlatım Bozukluğu',
    ],
    Matematik: [
      'Temel Kavramlar',
      'Sayı Basamakları',
      'Bölme ve Bölünebilme',
      'EBOB-EKOK',
      'Rasyonel Sayılar',
      'Basit Eşitsizlikler',
      'Mutlak Değer',
      'Üslü Sayılar',
      'Köklü Sayılar',
      'Çarpanlara Ayırma',
      'Oran-Orantı',
      'Denklem Çözme',
      'Problemler',
      'Kümeler',
      'Fonksiyonlar',
      'Permütasyon-Kombinasyon',
      'Olasılık',
      'Veri-İstatistik',
      'Geometri',
    ],
    Fizik: [
      'Fizik Bilimine Giriş',
      'Madde ve Özellikleri',
      'Hareket ve Kuvvet',
      'Enerji',
      'Isı ve Sıcaklık',
      'Elektrostatik',
      'Basınç',
      'Kaldırma Kuvveti',
      'Dalgalar',
      'Optik',
    ],
    Kimya: [
      'Kimya Bilimi',
      'Atom ve Periyodik Sistem',
      'Kimyasal Türler',
      'Maddenin Halleri',
      'Karışımlar',
      'Asit-Baz-Tuz',
      'Kimya Her Yerde',
    ],
    Biyoloji: [
      'Canlıların Ortak Özellikleri',
      'Hücre',
      'Canlıların Sınıflandırılması',
      'Hücre Bölünmeleri',
      'Kalıtım',
      'Ekosistem Ekolojisi',
    ],
    'Sosyal Bilimler': ['Tarih', 'Coğrafya', 'Felsefe', 'Din Kültürü'],
  },

  'AYT Sayısal': {
    Matematik: [
      'Fonksiyonlar',
      'Polinomlar',
      'İkinci Dereceden Denklemler',
      'Parabol',
      'Trigonometri',
      'Logaritma',
      'Diziler',
      'Limit',
      'Türev',
      'İntegral',
      'Analitik Geometri',
      'Olasılık',
    ],
    Fizik: [
      'Vektörler',
      'Kuvvet ve Hareket',
      'Elektrik ve Manyetizma',
      'Çembersel Hareket',
      'Basit Harmonik Hareket',
      'Dalga Mekaniği',
      'Modern Fizik',
    ],
    Kimya: [
      'Modern Atom Teorisi',
      'Gazlar',
      'Sıvı Çözeltiler',
      'Kimyasal Tepkimelerde Enerji',
      'Kimyasal Tepkimelerde Hız',
      'Kimyasal Denge',
      'Kimya ve Elektrik',
      'Organik Kimya',
    ],
    Biyoloji: [
      'İnsan Fizyolojisi',
      'Komünite ve Popülasyon Ekolojisi',
      'Genden Proteine',
      'Canlılarda Enerji Dönüşümleri',
      'Bitki Biyolojisi',
      'Canlılar ve Çevre',
    ],
  },

  'AYT EA': {
    Matematik: [
      'Fonksiyonlar',
      'Polinomlar',
      'Parabol',
      'Trigonometri',
      'Logaritma',
      'Diziler',
      'Limit',
      'Türev',
      'İntegral',
      'Olasılık',
    ],
    'Türk Dili ve Edebiyatı': [
      'Şiir Bilgisi',
      'Edebi Akımlar',
      'Tanzimat Edebiyatı',
      'Servetifünun',
      'Fecriati',
      'Milli Edebiyat',
      'Cumhuriyet Edebiyatı',
      'Roman',
      'Hikaye',
      'Tiyatro',
    ],
    'Tarih-1': [
      'Tarih ve Zaman',
      'Türk İslam Tarihi',
      'Osmanlı Tarihi',
      'Milli Mücadele',
      'Atatürk İlkeleri',
      'Çağdaş Türk ve Dünya Tarihi',
    ],
    'Coğrafya-1': [
      'Doğal Sistemler',
      'Beşeri Sistemler',
      'Türkiye Coğrafyası',
      'Ekonomik Faaliyetler',
      'Küresel Ortam',
    ],
  },

  'AYT Sözel': {
    'Türk Dili ve Edebiyatı': [
      'Şiir Bilgisi',
      'Edebi Akımlar',
      'Tanzimat Edebiyatı',
      'Servetifünun',
      'Fecriati',
      'Milli Edebiyat',
      'Cumhuriyet Edebiyatı',
      'Roman',
      'Hikaye',
      'Tiyatro',
    ],
    Tarih: [
      'İlk Çağ Uygarlıkları',
      'Türk İslam Tarihi',
      'Osmanlı Tarihi',
      'Milli Mücadele',
      'Atatürkçülük',
      'Çağdaş Türk ve Dünya Tarihi',
    ],
    Coğrafya: [
      'Doğal Sistemler',
      'Beşeri Sistemler',
      'Ekonomik Faaliyetler',
      'Bölgeler ve Ülkeler',
      'Çevre ve Toplum',
    ],
    'Felsefe Grubu': ['Felsefe', 'Psikoloji', 'Sosyoloji', 'Mantık'],
    'Din Kültürü': ['İnanç', 'İbadet', 'Ahlak ve Değerler', 'Din, Kültür ve Medeniyet'],
  },
};

const lessonThemes = {
  Matematik: { accent: '#4f7cff', soft: '#eef3ff', rgb: '79,124,255', icon: '∑' },
  Fizik: { accent: '#ff8a3d', soft: '#fff2e9', rgb: '255,138,61', icon: '⚡' },
  Kimya: { accent: '#12b886', soft: '#eafaf4', rgb: '18,184,134', icon: '🧪' },
  Biyoloji: { accent: '#58b368', soft: '#eef9f0', rgb: '88,179,104', icon: '🧬' },
  'Fen Bilimleri': { accent: '#12b886', soft: '#eafaf4', rgb: '18,184,134', icon: '🔬' },
  Türkçe: { accent: '#9b59b6', soft: '#f7effc', rgb: '155,89,182', icon: '✍️' },
  'Türk Dili ve Edebiyatı': { accent: '#8e44ad', soft: '#f4ebfa', rgb: '142,68,173', icon: '📚' },
  Edebiyat: { accent: '#8e44ad', soft: '#f4ebfa', rgb: '142,68,173', icon: '📖' },
  Tarih: { accent: '#c77d2b', soft: '#fff5ea', rgb: '199,125,43', icon: '🏛️' },
  'Tarih-1': { accent: '#c77d2b', soft: '#fff5ea', rgb: '199,125,43', icon: '🏛️' },
  'T.C. İnkılap Tarihi': { accent: '#c77d2b', soft: '#fff5ea', rgb: '199,125,43', icon: '🇹🇷' },
  Coğrafya: { accent: '#16a085', soft: '#eafaf7', rgb: '22,160,133', icon: '🌍' },
  'Coğrafya-1': { accent: '#16a085', soft: '#eafaf7', rgb: '22,160,133', icon: '🗺️' },
  Felsefe: { accent: '#6c5ce7', soft: '#efedff', rgb: '108,92,231', icon: '💭' },
  'Felsefe Grubu': { accent: '#6c5ce7', soft: '#efedff', rgb: '108,92,231', icon: '🧠' },
  'Din Kültürü': { accent: '#2a9d8f', soft: '#ecfbf8', rgb: '42,157,143', icon: '☪️' },
  'Sosyal Bilimler': { accent: '#b7791f', soft: '#fff7ea', rgb: '183,121,31', icon: '🧭' },
  İngilizce: { accent: '#00a6fb', soft: '#ebf8ff', rgb: '0,166,251', icon: '🌐' },
};

const levelThemes = {
  'Kolay anlatım': { color: '#43b581', soft: '#eaf9f1' },
  'Orta seviye': { color: '#4f7cff', soft: '#eef3ff' },
  'Sınav odaklı': { color: '#ff8a3d', soft: '#fff2e9' },
  'Detaylı öğrenme': { color: '#8e44ad', soft: '#f4ebfa' },
};

const OSYM_2025 = {
  averages: {
    tytTurkish: { mean: 21.243, sd: 7.848 },
    tytSocial: { mean: 9.496, sd: 4.042 },
    tytMath: { mean: 6.006, sd: 7.067 },
    tytScience: { mean: 4.122, sd: 4.862 },

    aytEdebiyat: { mean: 6.63, sd: 5.452 },
    aytTarih1: { mean: 2.243, sd: 2.423 },
    aytCografya1: { mean: 1.436, sd: 1.515 },

    aytTarih2: { mean: 1.426, sd: 1.965 },
    aytCografya2: { mean: 2.635, sd: 2.808 },
    aytFelsefe: { mean: 1.918, sd: 2.372 },
    aytDin: { mean: 1.473, sd: 1.796 },

    aytMath: { mean: 6.798, sd: 8.12 },
    aytPhysics: { mean: 2.442, sd: 3.313 },
    aytChem: { mean: 1.758, sd: 3.229 },
    aytBio: { mean: 2.596, sd: 3.227 },
  },

  placementDistribution: {
    Sayısal: [
      [550, 57],
      [530, 1930],
      [510, 7081],
      [490, 16140],
      [470, 29410],
      [450, 46142],
      [430, 65449],
      [410, 87117],
      [390, 111498],
      [370, 139619],
      [350, 174355],
      [330, 217778],
      [310, 274252],
      [290, 348397],
      [270, 449880],
      [250, 596635],
      [230, 811201],
      [210, 1052783],
      [190, 1228141],
      [170, 1287932],
      [150, 1291491],
      [130, 1291531],
      [115, 1291531],
    ],

    'Eşit Ağırlık': [
      [550, 4],
      [530, 58],
      [510, 261],
      [490, 742],
      [470, 1629],
      [450, 3422],
      [430, 8145],
      [410, 20244],
      [390, 42590],
      [370, 76959],
      [350, 125389],
      [330, 192949],
      [310, 287630],
      [290, 418975],
      [270, 592803],
      [250, 806796],
      [230, 1042314],
      [210, 1262545],
      [190, 1425544],
      [170, 1489209],
      [150, 1494521],
      [130, 1494611],
      [115, 1494612],
    ],

    Sözel: [
      [550, 1],
      [530, 7],
      [510, 26],
      [490, 77],
      [470, 254],
      [450, 721],
      [430, 1926],
      [410, 5036],
      [390, 12522],
      [370, 28323],
      [350, 57848],
      [330, 108894],
      [310, 190203],
      [290, 309551],
      [270, 468930],
      [250, 658973],
      [230, 849410],
      [210, 1010174],
      [190, 1121933],
      [170, 1168866],
      [150, 1173955],
      [130, 1174046],
      [115, 1174047],
    ],
  },
};

function CustomSelect({
  label,
  value,
  options,
  onChange,
  placeholder = 'Seçiniz',
  tone = 'default',
  className = '',
}) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`field ${className}`}>
      <label>{label}</label>

      <div ref={boxRef} className={`custom-select ${open ? 'open' : ''} ${tone}`}>
        <button
          type="button"
          className="custom-select-trigger"
          onClick={() => setOpen(!open)}
        >
          <span>{value || placeholder}</span>
          <span className="custom-arrow">{open ? '⌃' : '⌄'}</span>
        </button>

        {open && (
          <div className="custom-select-menu">
            {options.map((option) => (
              <button
                type="button"
                key={option}
                className={`custom-option ${value === option ? 'selected' : ''}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function goTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function standardScore(net, key) {
  const stat = OSYM_2025.averages[key];

  if (!stat || stat.sd === 0) {
    return 50;
  }

  return 50 + 10 * ((net - stat.mean) / stat.sd);
}

function estimateRankFromOsymDistribution(score, type) {
  const table = OSYM_2025.placementDistribution[type] || OSYM_2025.placementDistribution.Sayısal;

  if (score >= table[0][0]) {
    return `İlk ${table[0][1].toLocaleString('tr-TR')}`;
  }

  for (let i = 0; i < table.length - 1; i++) {
    const [highScore, highRank] = table[i];
    const [lowScore, lowRank] = table[i + 1];

    if (score <= highScore && score >= lowScore) {
      const ratio = (highScore - score) / (highScore - lowScore);
      const estimated = Math.round(highRank + ratio * (lowRank - highRank));

      return `Yaklaşık ${estimated.toLocaleString('tr-TR')}`;
    }
  }

  const lastRank = table[table.length - 1][1];
  return `${lastRank.toLocaleString('tr-TR')}+`;
}

export default function Home() {
  async function loginWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
  }); 
}
async function logout() {
  await supabase.auth.signOut();
  location.reload();
}
async function loadSavedNotes() {
  
async function deleteSavedNote(id) {
  await supabase
    .from('saved_notes')
    .delete()
    .eq('id', id);

  setSavedNotes((prev) =>
    prev.filter((item) => item.id !== id)
  );

  if (selectedHistoryNote?.id === id) {
    setSelectedHistoryNote(null);
  }
}
  if (!user) return;

  const { data } = await supabase
    .from('saved_notes')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', {
      ascending: false,
    });

  setSavedNotes(data || []);
  setShowHistory(true);
}
  const [grade, setGrade] = useState('TYT');
  const [lesson, setLesson] = useState('Türkçe');
  const [topic, setTopic] = useState('Sözcükte Anlam');
  const [level, setLevel] = useState('Sınav odaklı');
  const [outputType, setOutputType] = useState('Detaylı ders notu');
  const [extra, setExtra] = useState('');
  const [note, setNote] = useState('Henüz ders notu oluşturulmadı. Sınıfını, dersini ve konunu seçip ilk notunu oluşturabilirsin.');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);
  const [selectedHistoryNote, setSelectedHistoryNote] = useState(null);
  const [session, setSession] = useState(null);
  const [aiUsageInfo, setAiUsageInfo] = useState('');

  const [scoreType, setScoreType] = useState('Sayısal');
  const [diplomaGrade, setDiplomaGrade] = useState('80');
  const [calculatedYks, setCalculatedYks] = useState(null);
  const [needsRecalculate, setNeedsRecalculate] = useState(false);
  const [yksError, setYksError] = useState('');
  useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
  setSession(data.session);
  setUser(data.session?.user || null);
});
}, []);

  const [exam, setExam] = useState({
    tytTurkish: { d: '30', y: '10', max: 40 },
    tytSocial: { d: '12', y: '4', max: 20 },
    tytMath: { d: '22', y: '6', max: 40 },
    tytScience: { d: '10', y: '4', max: 20 },

    aytMath: { d: '25', y: '5', max: 40 },
    aytPhysics: { d: '8', y: '3', max: 14 },
    aytChem: { d: '8', y: '2', max: 13 },
    aytBio: { d: '8', y: '2', max: 13 },

    aytEdebiyat: { d: '16', y: '4', max: 24 },
    aytTarih1: { d: '7', y: '2', max: 10 },
    aytCografya1: { d: '4', y: '1', max: 6 },

    aytTarih2: { d: '7', y: '2', max: 11 },
    aytCografya2: { d: '7', y: '2', max: 11 },
    aytFelsefe: { d: '8', y: '2', max: 12 },
    aytDin: { d: '4', y: '1', max: 6 },
  });

  const availableLessons = Object.keys(curriculum[grade] || {});
  const availableTopics = curriculum[grade]?.[lesson] || [];

  const currentLessonTheme = lessonThemes[lesson] || {
    accent: '#4f7cff',
    soft: '#eef3ff',
    rgb: '79,124,255',
    icon: '📘',
  };

  const currentLevelTheme = levelThemes[level] || {
    color: '#4f7cff',
    soft: '#eef3ff',
  };

  const dynamicTheme = {
    '--accent': currentLessonTheme.accent,
    '--accent-soft': currentLessonTheme.soft,
    '--accent-rgb': currentLessonTheme.rgb,
    '--level-color': currentLevelTheme.color,
    '--level-soft': currentLevelTheme.soft,
  };

  function markYksDirty() {
    if (calculatedYks) {
      setNeedsRecalculate(true);
    }
  }

  function calculateNet(correct, wrong) {
    return Number(correct || 0) - Number(wrong || 0) / 4;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function updateExamValue(testKey, field, rawValue) {
    const cleanedValue = rawValue.replace(/\D/g, '');

    setExam((prev) => ({
      ...prev,
      [testKey]: {
        ...prev[testKey],
        [field]: cleanedValue,
      },
    }));

    setYksError('');
    markYksDirty();
  }

  function updateDiplomaGrade(value) {
    const cleanedValue = value.replace(/\D/g, '');

    setDiplomaGrade(cleanedValue);
    setYksError('');
    markYksDirty();
  }

  function updateScoreType(value) {
    setScoreType(value);
    markYksDirty();
  }

  function buildYksResult() {
    const nets = {
      tytTurkish: calculateNet(exam.tytTurkish.d, exam.tytTurkish.y),
      tytSocial: calculateNet(exam.tytSocial.d, exam.tytSocial.y),
      tytMath: calculateNet(exam.tytMath.d, exam.tytMath.y),
      tytScience: calculateNet(exam.tytScience.d, exam.tytScience.y),

      aytMath: calculateNet(exam.aytMath.d, exam.aytMath.y),
      aytPhysics: calculateNet(exam.aytPhysics.d, exam.aytPhysics.y),
      aytChem: calculateNet(exam.aytChem.d, exam.aytChem.y),
      aytBio: calculateNet(exam.aytBio.d, exam.aytBio.y),

      aytEdebiyat: calculateNet(exam.aytEdebiyat.d, exam.aytEdebiyat.y),
      aytTarih1: calculateNet(exam.aytTarih1.d, exam.aytTarih1.y),
      aytCografya1: calculateNet(exam.aytCografya1.d, exam.aytCografya1.y),

      aytTarih2: calculateNet(exam.aytTarih2.d, exam.aytTarih2.y),
      aytCografya2: calculateNet(exam.aytCografya2.d, exam.aytCografya2.y),
      aytFelsefe: calculateNet(exam.aytFelsefe.d, exam.aytFelsefe.y),
      aytDin: calculateNet(exam.aytDin.d, exam.aytDin.y),
    };

    const totalTytNet = nets.tytTurkish + nets.tytSocial + nets.tytMath + nets.tytScience;

    const sayisalAytNet = nets.aytMath + nets.aytPhysics + nets.aytChem + nets.aytBio;
    const eaAytNet = nets.aytMath + nets.aytEdebiyat + nets.aytTarih1 + nets.aytCografya1;
    const sozelAytNet =
      nets.aytEdebiyat +
      nets.aytTarih1 +
      nets.aytCografya1 +
      nets.aytTarih2 +
      nets.aytCografya2 +
      nets.aytFelsefe +
      nets.aytDin;

    const selectedAytNet =
      scoreType === 'Sayısal'
        ? sayisalAytNet
        : scoreType === 'Eşit Ağırlık'
          ? eaAytNet
          : sozelAytNet;

    const obp = Number(diplomaGrade) * 0.6;

    const tytStandard =
      standardScore(nets.tytTurkish, 'tytTurkish') * 0.33 +
      standardScore(nets.tytSocial, 'tytSocial') * 0.17 +
      standardScore(nets.tytMath, 'tytMath') * 0.33 +
      standardScore(nets.tytScience, 'tytScience') * 0.17;

    const estimatedTytScore = clamp(100 + tytStandard * 4, 100, 500);

    let aytStandard = 0;

    if (scoreType === 'Sayısal') {
      aytStandard =
        standardScore(nets.aytMath, 'aytMath') * 0.5 +
        standardScore(nets.aytPhysics, 'aytPhysics') * 0.166 +
        standardScore(nets.aytChem, 'aytChem') * 0.167 +
        standardScore(nets.aytBio, 'aytBio') * 0.167;
    }

    if (scoreType === 'Eşit Ağırlık') {
      aytStandard =
        standardScore(nets.aytMath, 'aytMath') * 0.5 +
        standardScore(nets.aytEdebiyat, 'aytEdebiyat') * 0.3 +
        standardScore(nets.aytTarih1, 'aytTarih1') * 0.1 +
        standardScore(nets.aytCografya1, 'aytCografya1') * 0.1;
    }

    if (scoreType === 'Sözel') {
      aytStandard =
        standardScore(nets.aytEdebiyat, 'aytEdebiyat') * 0.3 +
        standardScore(nets.aytTarih1, 'aytTarih1') * 0.1 +
        standardScore(nets.aytCografya1, 'aytCografya1') * 0.1 +
        standardScore(nets.aytTarih2, 'aytTarih2') * 0.1 +
        standardScore(nets.aytCografya2, 'aytCografya2') * 0.1 +
        standardScore(nets.aytFelsefe, 'aytFelsefe') * 0.2 +
        standardScore(nets.aytDin, 'aytDin') * 0.1;
    }

    const estimatedRawScore = clamp(
      estimatedTytScore * 0.4 + (100 + aytStandard * 4) * 0.6,
      100,
      500
    );

    const estimatedPlacementScore = clamp(estimatedRawScore + obp, 100, 560);
    const estimatedRank = estimateRankFromOsymDistribution(estimatedPlacementScore, scoreType);

    return {
      nets,
      totalTytNet,
      selectedAytNet,
      obp,
      estimatedTytScore,
      estimatedRawScore,
      estimatedPlacementScore,
      estimatedRank,
      scoreType,
    };
  }

  function calculateYks() {
    const diplomaNumber = Number(diplomaGrade || 0);

    if (!diplomaGrade) {
      setYksError('Diploma notu boş bırakılamaz.');
      return;
    }

    if (diplomaNumber < 50 || diplomaNumber > 100) {
      setYksError('Diploma notu 50 ile 100 arasında olmalıdır.');
      return;
    }

    const testNames = {
      tytTurkish: 'TYT Türkçe',
      tytSocial: 'TYT Sosyal',
      tytMath: 'TYT Matematik',
      tytScience: 'TYT Fen',
      aytMath: 'AYT Matematik',
      aytPhysics: 'AYT Fizik',
      aytChem: 'AYT Kimya',
      aytBio: 'AYT Biyoloji',
      aytEdebiyat: 'AYT Edebiyat',
      aytTarih1: 'AYT Tarih-1',
      aytCografya1: 'AYT Coğrafya-1',
      aytTarih2: 'AYT Tarih-2',
      aytCografya2: 'AYT Coğrafya-2',
      aytFelsefe: 'AYT Felsefe',
      aytDin: 'AYT Din',
    };

    for (const key of Object.keys(exam)) {
      const correct = Number(exam[key].d || 0);
      const wrong = Number(exam[key].y || 0);
      const max = exam[key].max;

      if (correct > max) {
        setYksError(`${testNames[key]} doğru sayısı ${max} soruyu geçemez.`);
        return;
      }

      if (wrong > max) {
        setYksError(`${testNames[key]} yanlış sayısı ${max} soruyu geçemez.`);
        return;
      }

      if (correct + wrong > max) {
        setYksError(`${testNames[key]} için doğru + yanlış toplamı en fazla ${max} olabilir.`);
        return;
      }
    }

    setYksError('');

    const result = buildYksResult();
    setCalculatedYks(result);
    setNeedsRecalculate(false);
  }

  function displayNet(testKey) {
    if (!calculatedYks) return 'Hesapla';
    return `${calculatedYks.nets[testKey].toFixed(2)} net`;
  }

  function changeGrade(value) {
    const firstLesson = Object.keys(curriculum[value])[0];
    const firstTopic = curriculum[value][firstLesson][0];

    setGrade(value);
    setLesson(firstLesson);
    setTopic(firstTopic);
  }

  function changeLesson(value) {
    const firstTopic = curriculum[grade][value][0];

    setLesson(value);
    setTopic(firstTopic);
  }

  async function generateNote() {
    setLoading(true);
    setNote('');
    setAiUsageInfo('');

    try {
      const res = await fetch('/api/generate-note', {
        method: 'POST',
        headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${session?.access_token || ''}`,
},
        body: JSON.stringify({ grade, lesson, topic, level, outputType, extra }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
  const errorData = await res.json();

  setErrorMessage(
    errorData.error || 'Bir hata oluştu.'
  );

  setTimeout(() => {
    setErrorMessage('');
  }, 5000);

  setLoading(false);
  return;
}

      const notePayload = {
        note: data.note,
        grade,
        lesson,
        topic,
        level,
        outputType,
        createdAt: new Date().toLocaleString('tr-TR'),
        remaining: data.remaining,
        limit: data.limit,
      };

      localStorage.setItem('Teknoders_last_note', JSON.stringify(notePayload));

      if (typeof data.remaining === 'number' && data.limit) {
        setAiUsageInfo(`Bugünkü kalan AI not hakkın: ${data.remaining}/${data.limit}`);
      }

      window.location.href = '/note';
    } catch (error) {
      setNote('Bağlantı hatası oluştu. Terminalde site çalışıyor mu kontrol et.');
    } finally {
      setLoading(false);
    }
  }
  async function deleteSavedNote(id) {
  await supabase
    .from('saved_notes')
    .delete()
    .eq('id', id);

  setSavedNotes((prev) =>
    prev.filter((item) => item.id !== id)
  );

  if (selectedHistoryNote?.id === id) {
    setSelectedHistoryNote(null);
  }
}

  function renderExamRow(title, testKey) {
    const test = exam[testKey];

    return (

      

      <div className="exam-row" key={testKey}>
        <strong>{title}</strong>

        <input
          type="text"
          inputMode="numeric"
          value={test.d}
          onChange={(e) => updateExamValue(testKey, 'd', e.target.value)}
          placeholder="Doğru"
        />

        <input
          type="text"
          inputMode="numeric"
          value={test.y}
          onChange={(e) => updateExamValue(testKey, 'y', e.target.value)}
          placeholder="Yanlış"
        />

        <span>{displayNet(testKey)}</span>
      </div>
    );
  }

   return (
    <main className="app-shell" style={dynamicTheme}>
    {errorMessage && (
  <div className="custom-error">
    {errorMessage}
  </div>
)}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-card">
            <div className="loading-spinner"></div>
            <h2>Ders notun hazırlanıyor</h2>
            <p>Konuyu düzenli başlıklara ayırıyoruz. Bu işlem birkaç saniye sürebilir.</p>
          </div>
        </div>
      )}

      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => goTo('home')}>
            <img src="/logo.png" alt="Teknoders Logo" className="brand-logo-image" />
            <span>
              <strong>Teknoders</strong>
              <small>AI öğrenci araçları</small>
            </span>
          </button>

          <nav className="nav-tabs">
            <button onClick={() => goTo('home')}>Ana Sayfa</button>
            <button onClick={() => goTo('ai-note')}>AI Not</button>
            <button onClick={() => goTo('tools')}>YKS Araçları</button>
          </nav>

          {user ? (
<div
  className="user-box"
  onClick={() =>
    setShowProfileMenu(!showProfileMenu)
  }
>
  <img
    src={user.user_metadata?.avatar_url}
    alt="Profil"
    className="user-avatar"
  />

  <span>
    {user.user_metadata?.name}
  </span>

  <button className="logout-btn" onClick={logout}>
    Çıkış Yap
  </button>
  {showProfileMenu && (
  <div className="profile-menu">

    <button>
      Profilim
    </button>

    <button onClick={loadSavedNotes}>
  Not Geçmişi
</button>
    <button
      className="logout-btn"
      onClick={logout}
    >
      Çıkış Yap
    </button>

  </div>
)}
</div>
) : (
  <button className="top-btn" onClick={loginWithGoogle}>
    Google ile Giriş Yap
  </button>
)}

          <button className="top-btn" onClick={() => goTo('ai-note')}>
            Başla
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge">Öğrenciler için sade ve güven veren çalışma alanı</span>
            <h1>Ders notunu sınıfına ve konuna göre oluştur.</h1>
            <p className="lead">
              Sınıfını, dersini ve konunu seç. Teknoders sana düzenli bir ders notu, önemli noktalar,
              mini tekrar soruları ve kısa çalışma planı hazırlasın.
            </p>

            <div className="hero-actions">
              <button className="btn hero-btn" onClick={() => goTo('ai-note')}>
                AI Ders Notu Oluştur
              </button>
              <button className="outline-btn" onClick={() => goTo('tools')}>
                YKS Araçlarına Git
              </button>
            </div>

            <div className="hero-summary">
              <div>
                <strong>{grade}</strong>
                <span>aktif alan</span>
              </div>
              <div>
                <strong>{currentLessonTheme.icon} {lesson}</strong>
                <span>aktif ders</span>
              </div>
              <div>
                <strong>{availableTopics.length}</strong>
                <span>konu seçeneği</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <span className="badge">Günün çalışma fikri</span>
            <h2>Az ama düzenli çalışmak, en güçlü başlangıçtır.</h2>
            <p>Bugün tek bir konu seç. Önce kısa özeti oku, sonra mini testle kendini kontrol et.</p>

            <div className="hero-card-list">
              <span>✓ Sınıfa göre konu listesi</span>
              <span>✓ Derse göre renk değişimi</span>
              <span>✓ Şık seçim menüsü</span>
              <span>✓ YKS net ve tahmini sıralama</span>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-note" className="container section">
        <div className="section-title">
          <span className="badge">Ana araç</span>
          <h2>AI Ders Notu Oluşturucu</h2>
          <p>Sade seçim sistemi korunur. Açılan menüler siteye özel tasarlanmış şekilde görünür.</p>
        </div>

        <div className="selected-info">
          <span>🎓 {grade}</span>
          <span>
            {currentLessonTheme.icon} {lesson}
          </span>
          <span>📌 {topic}</span>
          <span>⭐ {level}</span>
        </div>

        <section className="main-grid">
          <div className="card form-card">
            <div className="card-head">
              <div>
                <h2>Not ayarları</h2>
                <p>Sınıf, ders, konu ve seviye seç.</p>
              </div>
              <span className="lesson-badge">
                {currentLessonTheme.icon} {lesson}
              </span>
            </div>

            <div className="form-grid">
              <CustomSelect
                label="Sınıf / Alan"
                value={grade}
                options={Object.keys(curriculum)}
                onChange={changeGrade}
              />

              <CustomSelect
                label="Ders"
                value={lesson}
                options={availableLessons}
                onChange={changeLesson}
                tone="lesson"
              />

              <CustomSelect
                label="Konu"
                value={topic}
                options={availableTopics}
                onChange={setTopic}
              />

              <CustomSelect
                label="Seviye"
                value={level}
                options={['Kolay anlatım', 'Orta seviye', 'Sınav odaklı', 'Detaylı öğrenme']}
                onChange={setLevel}
                tone="level"
              />

              <CustomSelect
                label="Çıktı türü"
                value={outputType}
                options={[
                  'Detaylı ders notu',
                  'Kısa özet',
                  'Formül ve kavram listesi',
                  'Yazılıya hazırlık notu',
                  'TYT/AYT tekrar notu',
                ]}
                onChange={setOutputType}
                className="full"
              />

              <div className="field full">
                <label>Ek isteğin varsa yaz</label>
                <textarea
                  value={extra}
                  onChange={(e) => setExtra(e.target.value)}
                  placeholder="Örn: Çok basit anlat, formülleri ayrı yaz, 10 soru ekle..."
                />
              </div>
            </div>

            <p className="note">
              Not: Bu araç öğrenmeye yardımcıdır. Önemli konuları öğretmenin ve ders kitabınla kontrol et.
            </p>

            <button className="btn" onClick={generateNote} disabled={loading}>
              {loading ? 'Hazırlanıyor...' : 'Ders Notu Oluştur'}
            </button>

            {aiUsageInfo && <div className="ai-usage-info">{aiUsageInfo}</div>}
          </div>

          
           

            
         
        </section>
      </section>

      <section id="tools" className="container section">
        <div className="section-title left-title">
          <span className="badge">YKS araçları</span>
          <h2>YKS Net, Puan ve Tahmini Sıralama Hesaplama</h2>
          <p>
            TYT ve AYT doğru/yanlışlarını gir. Sonuçlar anlık değişmez; hesaplamak için butona basman gerekir.
          </p>
        </div>

        <section className="yks-layout">
          <div className="card yks-card">
            <div className="card-head">
              <div>
                <h2>Genel Bilgiler</h2>
                <p>Puan türünü ve diploma notunu gir.</p>
              </div>
            </div>

            <div className="form-grid">
              <CustomSelect
                label="Puan Türü"
                value={scoreType}
                options={['Sayısal', 'Eşit Ağırlık', 'Sözel']}
                onChange={updateScoreType}
                className="full"
              />

              <div className="field full">
                <label>Diploma Notu</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={diplomaGrade}
                  onChange={(e) => updateDiplomaGrade(e.target.value)}
                  placeholder="Örn: 80"
                />
              </div>
            </div>

            {needsRecalculate && (
              <div className="calc-warning">
                Değerleri değiştirdin. Sonucu güncellemek için tekrar hesapla.
              </div>
            )}

            {yksError && <div className="calc-error">{yksError}</div>}

            <button className="btn calc-btn" onClick={calculateYks}>
              YKS Sonucunu Hesapla
            </button>

            <div className="yks-summary">
              <div>
                <span>TYT Net</span>
                <strong>{calculatedYks ? calculatedYks.totalTytNet.toFixed(2) : '—'}</strong>
              </div>
              <div>
                <span>AYT Net</span>
                <strong>{calculatedYks ? calculatedYks.selectedAytNet.toFixed(2) : '—'}</strong>
              </div>
              <div>
                <span>OBP</span>
                <strong>{calculatedYks ? calculatedYks.obp.toFixed(1) : '—'}</strong>
              </div>
            </div>
          </div>

          <div className="card yks-card">
            <h2>TYT Netleri</h2>
            <p className="card-text">Doğru + yanlış toplamı testin soru sayısını geçemez.</p>

            <div className="exam-grid">
              {renderExamRow('Türkçe 40', 'tytTurkish')}
              {renderExamRow('Sosyal 20', 'tytSocial')}
              {renderExamRow('Matematik 40', 'tytMath')}
              {renderExamRow('Fen 20', 'tytScience')}
            </div>
          </div>

          <div className="card yks-card">
            <h2>AYT Netleri</h2>
            <p className="card-text">Seçtiğin puan türüne göre ilgili AYT netleri hesaba katılır.</p>

            <div className="exam-grid">
              {(scoreType === 'Sayısal' || scoreType === 'Eşit Ağırlık') &&
                renderExamRow('AYT Matematik 40', 'aytMath')}

              {scoreType === 'Sayısal' && (
                <>
                  {renderExamRow('Fizik 14', 'aytPhysics')}
                  {renderExamRow('Kimya 13', 'aytChem')}
                  {renderExamRow('Biyoloji 13', 'aytBio')}
                </>
              )}

              {(scoreType === 'Eşit Ağırlık' || scoreType === 'Sözel') && (
                <>
                  {renderExamRow('Edebiyat 24', 'aytEdebiyat')}
                  {renderExamRow('Tarih-1 10', 'aytTarih1')}
                  {renderExamRow('Coğrafya-1 6', 'aytCografya1')}
                </>
              )}

              {scoreType === 'Sözel' && (
                <>
                  {renderExamRow('Tarih-2 11', 'aytTarih2')}
                  {renderExamRow('Coğrafya-2 11', 'aytCografya2')}
                  {renderExamRow('Felsefe 12', 'aytFelsefe')}
                  {renderExamRow('Din 6', 'aytDin')}
                </>
              )}
            </div>
          </div>

          <div className="card yks-result-card">
            <h2>Yaklaşık Sonuç</h2>

            <div className="result-score-grid">
              <div>
                <span>TYT Puan Tahmini</span>
                <strong>{calculatedYks ? calculatedYks.estimatedTytScore.toFixed(2) : '—'}</strong>
              </div>

              <div>
                <span>{scoreType} Puan Tahmini</span>
                <strong>{calculatedYks ? calculatedYks.estimatedRawScore.toFixed(2) : '—'}</strong>
              </div>

              <div>
                <span>OBP Dahil Tahmini</span>
                <strong>{calculatedYks ? calculatedYks.estimatedPlacementScore.toFixed(2) : '—'}</strong>
              </div>

              <div>
                <span>Tahmini Sıralama</span>
                <strong>{calculatedYks ? calculatedYks.estimatedRank : '—'}</strong>
              </div>
            </div>

            <p className="note">
              Bu sonuç resmi değildir. ÖSYM puanları her yıl aday dağılımı, standart sapma ve test ortalamalarına göre değişir.
              Bu araç deneme takibi ve yaklaşık fikir vermek içindir.
            </p>
          </div>
        </section>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Teknoders</strong>
            <p>AI ders notu ve YKS araçları platformu.</p>
          </div>

          <div className="footer-buttons">
            <button onClick={() => goTo('home')}>Ana Sayfa</button>
            <button onClick={() => goTo('ai-note')}>AI Not</button>
            <button onClick={() => goTo('tools')}>YKS Araçları</button>
          </div>
        </div>
      </footer>
      <footer className="site-footer">
  <div className="footer-links">
    <a href="/hakkimizda">Hakkımızda</a>
    <a href="/iletisim">İletişim</a>
    <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
    <a href="/kullanim-sartlari">Kullanım Şartları</a>
  </div>

  <p>
    © 2026 Teknoders — AI destekli öğrenci platformu
  </p>
</footer>
{showHistory && (
  <div
    className="history-overlay"
    onClick={() => setShowHistory(false)}
  >
    <div
      className="history-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="history-header">
        <h2>Not Geçmişi</h2>

        <button onClick={() => setShowHistory(false)}>
          ✕
        </button>
      </div>

      <div className="history-list">
        {savedNotes.length === 0 ? (
          <p>Henüz kayıtlı not yok.</p>
        ) : (
          savedNotes.map((item) => (
            <div
  key={item.id}
  className="history-card"
  onClick={() => {
  localStorage.setItem(
    'Teknoders_last_note',
    JSON.stringify({
      note: item.note,
      lesson: item.lesson,
      topic: item.topic,
      grade: grade,
      level: level,
      outputType: outputType,
      createdAt: item.created_at,
    })
  );

  window.location.href = '/note';
}}
>
              <strong>
                {item.lesson}
              </strong>

              <span>
                {item.topic}
              </span>

              <small>
                {new Date(
                  item.created_at
                ).toLocaleString('tr-TR')}
              </small>
              <button
  className="delete-history-btn"
  onClick={(e) => {
    e.stopPropagation();
    deleteSavedNote(item.id);
  }}
>
  Sil
</button>
            </div>
          ))
        )}
      </div>

    </div>
  </div>
)}
{selectedHistoryNote && (
  <div
    className="history-overlay"
    onClick={() =>
      setSelectedHistoryNote(null)
    }
  >
    <div
      className="history-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="history-header">
        <h2>
          {selectedHistoryNote.lesson}
        </h2>

        <button
          onClick={() =>
            setSelectedHistoryNote(null)
          }
        >
          ✕
        </button>
      </div>

      <div className="history-note-content">
        <h3>
          {selectedHistoryNote.topic}
        </h3>

        <pre>
          {selectedHistoryNote.note}
        </pre>
      </div>

    </div>
  </div>
)}
    </main>
  );
}