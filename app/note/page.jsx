'use client';

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useEffect, useState } from 'react';

function formatNoteLines(note) {
  if (!note) return [];

  return note
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function isHeading(line) {
  return /^[0-9]+\.\s/.test(line);
}

function isBullet(line) {
  return line.startsWith('•');
}

export default function NotePage() {
  const [noteData, setNoteData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('Teknoders_last_note');

    if (saved) {
      try {
        setNoteData(JSON.parse(saved));
      } catch {
        setNoteData(null);
      }
    }
  }, []);

  async function copyNote() {
    if (!noteData?.note) return;

    await navigator.clipboard.writeText(noteData.note);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  }

  function goHome() {
    window.location.href = '/';
  }

  const downloadPDF = async () => {
    const element = document.getElementById("note-content");

    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = 297;

    const imgWidth = pdfWidth;

    const imgHeight =
      (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pdfHeight;
    }

    pdf.save("teknoders-not.pdf");
  };

  if (!noteData) {
    return (
      <main className="note-page-shell">
        <div className="note-empty-card">
          <h1>Henüz oluşturulmuş bir ders notu yok</h1>

          <p>
            Önce ana sayfadan bir ders notu oluşturman gerekiyor.
          </p>

          <button onClick={goHome}>
            Ana Sayfaya Dön
          </button>
        </div>
      </main>
    );
  }

  const lines = formatNoteLines(noteData.note);

  return (
    <main className="note-page-shell">

      <header className="note-topbar">

        <button
          className="note-brand"
          onClick={goHome}
        >
          <span>D</span>
          <strong>Teknoders</strong>
        </button>

        <div className="note-actions">

          <button onClick={copyNote}>
            {copied ? 'Kopyalandı' : 'Notu Kopyala'}
          </button>

          <button onClick={() => window.print()}>
            Yazdır
          </button>

          <button onClick={downloadPDF}>
            PDF İndir
          </button>

          <button onClick={goHome}>
            Yeni Not Oluştur
          </button>

        </div>
      </header>

      <section className="note-hero">

        <span>AI Ders Notu</span>

        <h1>
          {noteData.lesson} - {noteData.topic}
        </h1>

        <p>
          {noteData.grade} • {noteData.level} • {noteData.outputType}
        </p>

        <div className="note-meta">

          <div>
            <small>Oluşturulma</small>
            <strong>{noteData.createdAt}</strong>
          </div>

          {typeof noteData.remaining === 'number' &&
            noteData.limit && (
              <div>
                <small>Kalan hak</small>

                <strong>
                  {noteData.remaining}/{noteData.limit}
                </strong>
              </div>
            )}

        </div>
      </section>

      <article
        id="note-content"
        className="note-paper"
      >

        <div className="pdf-watermark">
          <img
            src="/logo.png"
            alt="Teknoders"
          />
        </div>

        <div className="pdf-top">

          <span>Teknoders AI</span>

          <h1>
            {noteData.lesson} - {noteData.topic}
          </h1>

          <p>
            {noteData.grade} • {noteData.level} • {noteData.outputType}
          </p>

        </div>

        {lines.map((line, index) => {

          if (isHeading(line)) {
            return <h2 key={index}>{line}</h2>;
          }

          if (isBullet(line)) {
            return (
              <p
                key={index}
                className="note-bullet"
              >
                {line}
              </p>
            );
          }

          return <p key={index}>{line}</p>;
        })}

      </article>

    </main>
  );
}