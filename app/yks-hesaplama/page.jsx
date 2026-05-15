'use client';

import { useState } from 'react';
import CustomSelect from '../components/CustomSelect';
import { OSYM_2025 } from '../data/curriculum';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function calculateNet(correct, wrong) {
  return Number(correct || 0) - Number(wrong || 0) / 4;
}

function standardScore(net, key) {
  const stat = OSYM_2025.averages[key];
  if (!stat || stat.sd === 0) return 50;
  return 50 + 10 * ((net - stat.mean) / stat.sd);
}

function estimateRankFromOsymDistribution(score, type) {
  const table = OSYM_2025.placementDistribution[type] || OSYM_2025.placementDistribution.Sayısal;
  if (score >= table[0][0]) return `İlk ${table[0][1].toLocaleString('tr-TR')}`;

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

export default function YksCalculatorPage() {
  const [scoreType, setScoreType] = useState('Sayısal');
  const [diplomaGrade, setDiplomaGrade] = useState('80');
  const [calculatedYks, setCalculatedYks] = useState(null);
  const [needsRecalculate, setNeedsRecalculate] = useState(false);
  const [yksError, setYksError] = useState('');

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

  function markYksDirty() {
    if (calculatedYks) setNeedsRecalculate(true);
  }

  function updateExamValue(testKey, field, rawValue) {
    const cleanedValue = rawValue.replace(/\D/g, '');
    setExam((prev) => ({
      ...prev,
      [testKey]: { ...prev[testKey], [field]: cleanedValue },
    }));
    setYksError('');
    markYksDirty();
  }

  function calculateYks() {
    const diplomaNumber = Number(diplomaGrade || 0);
    if (!diplomaGrade || diplomaNumber < 50 || diplomaNumber > 100) {
      setYksError('Diploma notu 50 ile 100 arasında olmalıdır.');
      return;
    }
    setYksError('');

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
    const sozelAytNet = nets.aytEdebiyat + nets.aytTarih1 + nets.aytCografya1 + nets.aytTarih2 + nets.aytCografya2 + nets.aytFelsefe + nets.aytDin;

    const selectedAytNet = scoreType === 'Sayısal' ? sayisalAytNet : scoreType === 'Eşit Ağırlık' ? eaAytNet : sozelAytNet;
    const obp = Number(diplomaGrade) * 0.6;

    const tytStandard = standardScore(nets.tytTurkish, 'tytTurkish') * 0.33 + standardScore(nets.tytSocial, 'tytSocial') * 0.17 + standardScore(nets.tytMath, 'tytMath') * 0.33 + standardScore(nets.tytScience, 'tytScience') * 0.17;
    const estimatedTytScore = clamp(100 + tytStandard * 4, 100, 500);

    let aytStandard = 0;
    if (scoreType === 'Sayısal') {
      aytStandard = standardScore(nets.aytMath, 'aytMath') * 0.5 + standardScore(nets.aytPhysics, 'aytPhysics') * 0.166 + standardScore(nets.aytChem, 'aytChem') * 0.167 + standardScore(nets.aytBio, 'aytBio') * 0.167;
    } else if (scoreType === 'Eşit Ağırlık') {
      aytStandard = standardScore(nets.aytMath, 'aytMath') * 0.5 + standardScore(nets.aytEdebiyat, 'aytEdebiyat') * 0.3 + standardScore(nets.aytTarih1, 'aytTarih1') * 0.1 + standardScore(nets.aytCografya1, 'aytCografya1') * 0.1;
    } else {
      aytStandard = standardScore(nets.aytEdebiyat, 'aytEdebiyat') * 0.3 + standardScore(nets.aytTarih1, 'aytTarih1') * 0.1 + standardScore(nets.aytCografya1, 'aytCografya1') * 0.1 + standardScore(nets.aytTarih2, 'aytTarih2') * 0.1 + standardScore(nets.aytCografya2, 'aytCografya2') * 0.1 + standardScore(nets.aytFelsefe, 'aytFelsefe') * 0.2 + standardScore(nets.aytDin, 'aytDin') * 0.1;
    }

    const estimatedRawScore = clamp(estimatedTytScore * 0.4 + (100 + aytStandard * 4) * 0.6, 100, 500);
    const estimatedPlacementScore = clamp(estimatedRawScore + obp, 100, 560);
    const estimatedRank = estimateRankFromOsymDistribution(estimatedPlacementScore, scoreType);

    setCalculatedYks({ nets, totalTytNet, selectedAytNet, obp, estimatedPlacementScore, estimatedRank });
    setNeedsRecalculate(false);
  }

  function renderExamRow(title, testKey) {
    const test = exam[testKey];
    return (
      <div key={testKey} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <strong style={{ width: '120px', fontSize: '0.9rem' }}>{title}</strong>
        <input style={{ width: '80px', padding: '0.5rem' }} type="text" inputMode="numeric" value={test.d} onChange={(e) => updateExamValue(testKey, 'd', e.target.value)} placeholder="D" />
        <input style={{ width: '80px', padding: '0.5rem' }} type="text" inputMode="numeric" value={test.y} onChange={(e) => updateExamValue(testKey, 'y', e.target.value)} placeholder="Y" />
        <span style={{ fontWeight: 800, color: 'var(--primary)', width: '50px', textAlign: 'right' }}>{calculatedYks ? calculatedYks.nets[testKey].toFixed(2) : '-'}</span>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          YKS Puan ve Sıralama Hesaplama
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>ÖSYM 2025 istatistiklerine göre en yakın sıralama tahmini.</p>
      </div>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <CustomSelect label="Puan Türü" value={scoreType} options={['Sayısal', 'Eşit Ağırlık', 'Sözel']} onChange={v => { setScoreType(v); markYksDirty(); }} />
          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Diploma Notu (OBP İçin)</label>
            <input type="text" value={diplomaGrade} onChange={e => { setDiplomaGrade(e.target.value.replace(/\D/g, '')); markYksDirty(); }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem' }}>TYT Netleri</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {renderExamRow('Türkçe (40)', 'tytTurkish')}
              {renderExamRow('Sosyal (20)', 'tytSocial')}
              {renderExamRow('Matematik (40)', 'tytMath')}
              {renderExamRow('Fen (20)', 'tytScience')}
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem' }}>AYT Netleri</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {(scoreType === 'Sayısal' || scoreType === 'Eşit Ağırlık') && renderExamRow('Matematik (40)', 'aytMath')}
              {scoreType === 'Sayısal' && (
                <>
                  {renderExamRow('Fizik (14)', 'aytPhysics')}
                  {renderExamRow('Kimya (13)', 'aytChem')}
                  {renderExamRow('Biyoloji (13)', 'aytBio')}
                </>
              )}
              {(scoreType === 'Eşit Ağırlık' || scoreType === 'Sözel') && (
                <>
                  {renderExamRow('Edebiyat (24)', 'aytEdebiyat')}
                  {renderExamRow('Tarih-1 (10)', 'aytTarih1')}
                  {renderExamRow('Coğrafya-1 (6)', 'aytCografya1')}
                </>
              )}
              {scoreType === 'Sözel' && (
                <>
                  {renderExamRow('Tarih-2 (11)', 'aytTarih2')}
                  {renderExamRow('Coğrafya-2 (11)', 'aytCografya2')}
                  {renderExamRow('Felsefe (12)', 'aytFelsefe')}
                  {renderExamRow('Din (6)', 'aytDin')}
                </>
              )}
            </div>
          </div>
        </div>

        {yksError && <div style={{ color: 'var(--danger)', marginTop: '1.5rem', fontWeight: 600 }}>{yksError}</div>}
        {needsRecalculate && <div style={{ color: 'var(--accent)', marginTop: '1.5rem', fontWeight: 600 }}>Netleri değiştirdin, yeniden hesapla butonuna bas!</div>}

        <button className="btn-primary" onClick={calculateYks} style={{ marginTop: '2.5rem', width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
          Tahmini Sıralamamı Hesapla
        </button>

        {calculatedYks && (
          <div style={{ marginTop: '2.5rem', padding: '2rem', background: 'var(--primary-soft)', borderRadius: 'var(--radius-xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            <div><small style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>TYT Net</small><div style={{ fontSize: '1.75rem', fontWeight: 900 }}>{calculatedYks.totalTytNet.toFixed(2)}</div></div>
            <div><small style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>AYT Net</small><div style={{ fontSize: '1.75rem', fontWeight: 900 }}>{calculatedYks.selectedAytNet.toFixed(2)}</div></div>
            <div><small style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Yerleştirme Puanı</small><div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary)' }}>{calculatedYks.estimatedPlacementScore.toFixed(2)}</div></div>
            <div style={{ gridColumn: '1 / -1', background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <small style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{scoreType} Sıralaması</small>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {calculatedYks.estimatedRank}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
