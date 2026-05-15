'use client';

import Link from 'next/link';
import { BookOpen, Calculator, Users, MessageCircle, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <main style={{ minHeight: 'calc(100vh - 6rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Öğrenmenin <span style={{ background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Yeni ve Sosyal</span> Yolu
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Teknoders sadece bir ders notu aracı değil. Senin gibi binlerce öğrencinin bulunduğu, notlarını paylaşabildiği, 
          sorularını çözdürdüğü ve hedeflerine ulaştığı devasa bir öğrenci platformudur.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/not-olustur" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Hemen Not Oluştur <ArrowRight size={20} />
          </Link>
          <Link href="/topluluk" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Topluluğa Katıl
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          <Link href="/not-olustur" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--primary-soft)', borderRadius: 'var(--radius-lg)', color: 'var(--primary)' }}>
              <BookOpen size={32} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>AI Ders Notu</h2>
            <p style={{ color: 'var(--text-muted)' }}>İstediğin sınıf ve konuyu seç, yapay zeka senin için mükemmel bir çalışma notu hazırlasın. Üstelik bu notları profilinde saklayabilirsin.</p>
          </Link>

          <Link href="/yks-hesaplama" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(244, 63, 94, 0.15)', borderRadius: 'var(--radius-lg)', color: 'var(--accent)' }}>
              <Calculator size={32} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>YKS Hesaplama</h2>
            <p style={{ color: 'var(--text-muted)' }}>ÖSYM'nin en güncel istatistiklerine göre netlerini gir ve tahmini sıralamanı anında gör. Hedefini belirle.</p>
          </Link>

          <Link href="/mesajlar" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: 'var(--radius-lg)', color: '#10b981' }}>
              <MessageCircle size={32} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Soru Çözüm Kanalları</h2>
            <p style={{ color: 'var(--text-muted)' }}>Matematik, Fizik gibi kanallara gir, fotoğraf yükleyerek yapamadığın soruları diğer öğrencilere sor. (48 saatte silinir)</p>
          </Link>

          <Link href="/topluluk" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.15)', borderRadius: 'var(--radius-lg)', color: '#f59e0b' }}>
              <Users size={32} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Öğrenci Akışı</h2>
            <p style={{ color: 'var(--text-muted)' }}>Kendi oluşturduğun notları toplulukta paylaş, başkalarının notlarını beğen, kaydet ve yorum yap.</p>
          </Link>

        </div>
      </section>

    </main>
  );
}