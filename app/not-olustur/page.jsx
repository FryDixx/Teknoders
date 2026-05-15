'use client';

import { useState } from 'react';
import CustomSelect from '../components/CustomSelect';
import { curriculum, lessonThemes } from '../data/curriculum';
import { useAuth } from '../components/AuthProvider';

export default function CreateNotePage() {
  const { session } = useAuth();
  const [grade, setGrade] = useState('TYT');
  const [lesson, setLesson] = useState('Türkçe');
  const [topic, setTopic] = useState('Sözcükte Anlam');
  const [level, setLevel] = useState('Sınav odaklı');
  const [outputType, setOutputType] = useState('Detaylı ders notu');
  const [extra, setExtra] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const availableLessons = Object.keys(curriculum[grade] || {});
  const availableTopics = curriculum[grade]?.[lesson] || [];

  async function generateNote() {
    setLoading(true);
    try {
      const res = await fetch('/api/generate-note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.access_token || ''}` },
        body: JSON.stringify({ grade, lesson, topic, level, outputType, extra }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || 'Bir hata oluştu.');
        setTimeout(() => setErrorMessage(''), 5000);
        return;
      }

      const notePayload = {
        note: data.note, grade, lesson, topic, level, outputType,
        createdAt: new Date().toLocaleString('tr-TR'),
      };

      localStorage.setItem('Teknoders_last_note', JSON.stringify(notePayload));

      // Eğer kullanıcı giriş yapmışsa veritabanına kaydet
      if (session?.user?.id) {
        import('../lib/supabase').then(async ({ supabase }) => {
          await supabase.from('saved_notes').insert({
            user_id: session.user.id,
            grade,
            lesson,
            topic,
            content: data.note
          });
        });
      }

      window.location.href = '/note';
    } catch (error) {
      setErrorMessage('Bağlantı hatası oluştu.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '900px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          AI Ders Notu Oluşturucu
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Sınıf, ders ve konu seç; yapay zeka senin için saniyeler içinde mükemmel bir özet hazırlasın.</p>
      </div>

      {errorMessage && (
        <div style={{ padding: '1rem', background: 'var(--danger-soft)', color: 'var(--danger)', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
          {errorMessage}
        </div>
      )}

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <CustomSelect label="Sınıf / Alan" value={grade} options={Object.keys(curriculum)} onChange={(v) => { setGrade(v); setLesson(Object.keys(curriculum[v])[0]); setTopic(curriculum[v][Object.keys(curriculum[v])[0]][0]); }} />
          <CustomSelect label="Ders" value={lesson} options={availableLessons} onChange={(v) => { setLesson(v); setTopic(curriculum[grade][v][0]); }} />
          <CustomSelect label="Konu" value={topic} options={availableTopics} onChange={setTopic} />
          <CustomSelect label="Seviye" value={level} options={['Kolay anlatım', 'Orta seviye', 'Sınav odaklı', 'Detaylı öğrenme']} onChange={setLevel} />
          <CustomSelect label="Çıktı türü" value={outputType} options={['Detaylı ders notu', 'Kısa özet', 'Formül ve kavram listesi', 'Yazılıya hazırlık notu', 'TYT/AYT tekrar notu']} onChange={setOutputType} />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Ek İstek (Opsiyonel)</label>
          <textarea rows="3" value={extra} onChange={(e) => setExtra(e.target.value)} placeholder="Örn: Bu konuyu bir ilkokul öğrencisine anlatır gibi anlat..." />
        </div>

        <button className="btn-primary" onClick={generateNote} disabled={loading} style={{ marginTop: '2rem', width: '100%', padding: '1rem' }}>
          {loading ? 'Yapay Zeka Çalışıyor...' : 'Notu Oluştur 🚀'}
        </button>
      </div>
    </div>
  );
}
