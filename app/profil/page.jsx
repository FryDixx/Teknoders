'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../components/AuthProvider';
import { User, Book, MapPin, GraduationCap, Target, Save, Eye } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, profile, updateProfile, loading } = useAuth();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    if (profile) {
      setFormData({
        display_name: profile.display_name || '',
        username: profile.username || '',
        bio: profile.bio || '',
        grade: profile.grade || '',
        target_department: profile.target_department || '',
      });
    }
  }, [profile]);

  useEffect(() => {
    if (user) {
      supabase
        .from('saved_notes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .then(({ data }) => setSavedNotes(data || []));
    }
  }, [user]);

  if (loading) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Yükleniyor...</div>;
  if (!user) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Giriş yapmanız gerekiyor.</div>;

  async function handleSave() {
    await updateProfile(formData);
    setEditing(false);
  }

  async function handleShareNote(note) {
    if (!user) return;
    const confirmShare = window.confirm(`"${note.lesson} - ${note.topic}" notunu toplulukla paylaşmak istiyor musun?`);
    if (!confirmShare) return;

    await supabase.from('posts').insert({
      user_id: user.id,
      content: `Herkese selam! Az önce "${note.lesson}" dersinden "${note.topic}" konusu için çalışmamı tamamladım. İncelemek isteyenler için notumu paylaşıyorum. 🚀`,
      note_id: note.id,
      lesson: note.lesson,
      topic: note.topic
    });

    alert('Notun başarıyla toplulukta paylaşıldı!');
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Profile Card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
          <img 
            src={profile?.avatar_url || user.user_metadata?.avatar_url} 
            alt="Avatar" 
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--primary-soft)' }} 
          />
          
          <div style={{ width: '100%' }}>
            {editing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Görünür Ad</label>
                  <input value={formData.display_name} onChange={(e) => setFormData({...formData, display_name: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Kullanıcı Adı</label>
                  <input value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Bio</label>
                  <textarea value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Sınıf</label>
                  <input value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Hedef Bölüm</label>
                  <input value={formData.target_department} onChange={(e) => setFormData({...formData, target_department: e.target.value})} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button className="btn-primary" onClick={handleSave} style={{ flex: 1 }}><Save size={18} /> Kaydet</button>
                  <button className="btn-secondary" onClick={() => setEditing(false)} style={{ flex: 1 }}>İptal</button>
                </div>
              </div>
            ) : (
              <>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{profile?.display_name}</h1>
                <p style={{ color: 'var(--text-muted)' }}>@{profile?.username}</p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{profile?.bio || 'Bio eklenmemiş.'}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', textAlign: 'left', background: 'var(--surface-soft)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><GraduationCap size={18} color="var(--primary)" /> <strong>Sınıf:</strong> {profile?.grade || 'Belirtilmemiş'}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Target size={18} color="var(--primary)" /> <strong>Hedef:</strong> {profile?.target_department || 'Belirtilmemiş'}</div>
                </div>

                <button className="btn-secondary" onClick={() => setEditing(true)} style={{ marginTop: '1.5rem', width: '100%' }}>Profili Düzenle</button>
              </>
            )}
          </div>
        </div>

        {/* Stats & History */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>İstatistikler</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1, background: 'var(--surface-soft)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <Book size={24} color="var(--primary)" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{savedNotes.length}</div>
                <small style={{ color: 'var(--text-muted)' }}>Oluşturulan Not</small>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Geçmiş Notlarım (Gizli)</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {savedNotes.length === 0 ? (
                <p style={{ color: 'var(--text-muted)' }}>Henüz not oluşturmadın.</p>
              ) : (
                savedNotes.map(note => (
                  <div key={note.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--surface)' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--primary)' }}>{note.lesson}</div>
                      <div style={{ fontSize: '0.9rem' }}>{note.topic}</div>
                      <small style={{ color: 'var(--text-muted)' }}>{new Date(note.created_at).toLocaleDateString('tr-TR')}</small>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                      <Link 
                        href={`/not/${note.id}`}
                        className="btn-primary" 
                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                      >
                        <Eye size={14} /> Görüntüle
                      </Link>
                      <button 
                        onClick={() => handleShareNote(note)}
                        className="btn-secondary" 
                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                      >
                        Paylaş
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
