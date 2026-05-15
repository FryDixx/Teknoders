'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { ArrowLeft, Download, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function formatNoteLines(note) {
  if (!note) return [];
  return note.split('\n').map(l => l.trim()).filter(Boolean);
}

function isHeading(line) {
  return /^#{1,3}\s/.test(line) || /^[0-9]+\.\s/.test(line) || /^\*\*[^*]+\*\*$/.test(line);
}

function isBullet(line) {
  return line.startsWith('•') || line.startsWith('-') || line.startsWith('*');
}

function cleanLine(line) {
  return line.replace(/\*\*/g, '').replace(/^#+\s*/, '');
}

export default function ViewNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadNote() {
      if (!id) return;
      const { data } = await supabase
        .from('saved_notes')
        .select('*')
        .eq('id', id)
        .single();
      setNote(data);
      setLoading(false);
    }
    loadNote();
  }, [id]);

  async function copyNote() {
    if (!note?.content) return;
    await navigator.clipboard.writeText(note.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const downloadPDF = async () => {
    const element = document.getElementById("note-content");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2, useCORS: true, backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210;
    const pdfHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    const fileName = `${note.lesson}-${note.topic}`.replace(/\s+/g, '_');
    pdf.save(`${fileName}.pdf`);
  };

  if (loading) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Yükleniyor...</div>;
  if (!note) return (
    <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <div className="card" style={{ padding: '3rem', maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Not Bulunamadı</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Bu not silinmiş veya erişim izniniz yok olabilir.</p>
        <Link href="/" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex', padding: '0.75rem 2rem' }}>
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );

  const lines = formatNoteLines(note.content);

  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px' }}>
      
      {/* Üst Bilgi Kartı */}
      <div className="card" style={{ marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--primary-gradient)' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--primary-soft)', padding: '0.25rem 0.75rem', borderRadius: '2rem' }}>
              {note.grade || 'AI Ders Notu'}
            </span>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '0.75rem' }}>
              {note.lesson} — {note.topic}
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
            <small style={{ color: 'var(--text-muted)' }}>Oluşturulma</small>
            <strong style={{ fontSize: '0.9rem' }}>{new Date(note.created_at).toLocaleDateString('tr-TR')}</strong>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
          <button onClick={copyNote} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
            {copied ? <><Check size={16} /> Kopyalandı!</> : <><Copy size={16} /> Kopyala</>}
          </button>
          <button onClick={downloadPDF} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
            <Download size={16} /> PDF İndir
          </button>
          <Link href="/profil" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', fontSize: '0.9rem', marginLeft: 'auto' }}>
            <ArrowLeft size={16} /> Profilime Dön
          </Link>
        </div>
      </div>

      {/* Not İçeriği */}
      <article id="note-content" style={{ background: '#ffffff', color: '#1e1e2f', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', lineHeight: 1.8, fontSize: '1rem' }}>
        <div style={{ borderBottom: '2px solid #6366f1', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', letterSpacing: '2px', textTransform: 'uppercase' }}>Teknoders AI</div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.25rem', color: '#1e1e2f' }}>{note.lesson} — {note.topic}</h1>
          </div>
          <small style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{new Date(note.created_at).toLocaleDateString('tr-TR')}</small>
        </div>

        {lines.map((line, index) => {
          if (isHeading(line)) {
            return <h2 key={index} style={{ fontSize: '1.2rem', fontWeight: 800, color: '#4f46e5', marginTop: '2rem', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0' }}>{cleanLine(line)}</h2>;
          }
          if (isBullet(line)) {
            return (
              <p key={index} style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem', position: 'relative', color: '#334155' }}>
                <span style={{ position: 'absolute', left: '0.25rem', top: '0.5rem', width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
                {line.replace(/^[•\-*]\s*/, '')}
              </p>
            );
          }
          return <p key={index} style={{ marginBottom: '0.75rem', color: '#334155' }}>{line}</p>;
        })}

        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.75rem' }}>
          <span>Teknoders — AI Destekli Öğrenci Platformu</span>
          <span>teknoders.com</span>
        </div>
      </article>
    </div>
  );
}
