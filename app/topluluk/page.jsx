'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../components/AuthProvider';
import { Heart, MessageCircle, Share2, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState('');
  const [deletingPostId, setDeletingPostId] = useState(null);

  const [filterLesson, setFilterLesson] = useState('Hepsi');

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    const { data } = await supabase
      .from('posts')
      .select('*, profiles(display_name, avatar_url, username)')
      .order('created_at', { ascending: false });
    
    if (data) {
      setPosts(data);
    }
    setLoading(false);
  }

  async function handlePost(e) {
    e.preventDefault();
    if (!newPostContent.trim() || !user) return;

    const { error } = await supabase.from('posts').insert({
      user_id: user.id,
      content: newPostContent,
      lesson: filterLesson !== 'Hepsi' ? filterLesson : null
    });

    if (error) {
      alert('Gönderi paylaşılamadı: ' + error.message);
    } else {
      setNewPostContent('');
      loadPosts(); // Reload to get new post
    }
  }

  async function handleDelete(postId) {
    if (!user) return;
    
    const { error } = await supabase.from('posts').delete().eq('id', postId).eq('user_id', user.id);
    
    if (error) {
      alert('Gönderi silinemedi: ' + error.message);
    } else {
      setPosts(posts.filter(p => p.id !== postId));
    }
    setDeletingPostId(null);
  }

  async function handleLike(postId) {
    if (!user) return;
    const post = posts.find(p => p.id === postId);
    await supabase.from('posts').update({ likes_count: (post.likes_count || 0) + 1 }).eq('id', postId);
    setPosts(posts.map(p => p.id === postId ? { ...p, likes_count: (p.likes_count || 0) + 1 } : p));
  }

  const lessons = ['Hepsi', 'Türkçe', 'Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Edebiyat'];
  const filteredPosts = filterLesson === 'Hepsi' ? posts : posts.filter(p => p.lesson === filterLesson);

  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Öğrenci Topluluğu
      </h1>

      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1rem', scrollbarWidth: 'none' }}>
        {lessons.map(lesson => (
          <button 
            key={lesson}
            onClick={() => setFilterLesson(lesson)}
            className={filterLesson === lesson ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', borderRadius: '2rem', whiteSpace: 'nowrap' }}
          >
            {lesson}
          </button>
        ))}
      </div>

      {user && (
        <form onSubmit={handlePost} className="card" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <textarea 
            value={newPostContent} 
            onChange={(e) => setNewPostContent(e.target.value)} 
            placeholder={filterLesson === 'Hepsi' ? "Ne çalışıyorsun? Bir şeyler paylaş..." : `${filterLesson} hakkında bir şeyler paylaş...`}
            rows="3"
            style={{ border: 'none', background: 'transparent', resize: 'none', outline: 'none', padding: 0 }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <button type="submit" disabled={!newPostContent.trim()} className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
              Paylaş
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Yükleniyor...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredPosts.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Bu kategoride henüz gönderi yok. İlk paylaşan sen ol!</div>
          ) : (
            filteredPosts.map(post => (
              <div key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Link href={`/profil/${post.user_id}`}>
                    <img src={post.profiles?.avatar_url || '/default-avatar.png'} alt="Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  </Link>
                  <div style={{ flex: 1 }}>
                    <Link href={`/profil/${post.user_id}`}>
                      <strong style={{ display: 'block', fontSize: '1rem' }}>{post.profiles?.display_name || 'Kullanıcı'}</strong>
                    </Link>
                    <small style={{ color: 'var(--text-muted)' }}>@{post.profiles?.username} • {new Date(post.created_at).toLocaleDateString('tr-TR')}</small>
                  </div>

                  {/* Silme Butonu - Sadece kendi postları için */}
                  {user && user.id === post.user_id && (
                    <button 
                      onClick={() => setDeletingPostId(post.id)}
                      title="Gönderiyi sil"
                      style={{ 
                        color: 'var(--text-muted)', 
                        padding: '0.5rem', 
                        borderRadius: '50%', 
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                      className="hover-text-danger"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
                
                <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{post.content}</p>
                
                {post.note_id && (
                  <Link href={`/not/${post.note_id}`} style={{ display: 'block', padding: '1rem', background: 'var(--primary-soft)', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary)', transition: 'all 0.2s', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong>📝 Paylaşılan Ders Notu</strong>
                        <div style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>{post.lesson} {post.topic ? `— ${post.topic}` : ''}</div>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>Notu Aç →</span>
                    </div>
                  </Link>
                )}

                <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem', color: 'var(--text-muted)' }}>
                  <button onClick={() => handleLike(post.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="hover-text-primary">
                    <Heart size={18} /> {post.likes_count || 0}
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="hover-text-primary">
                    <MessageCircle size={18} /> Yorumlar
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="hover-text-primary">
                    <Share2 size={18} /> Paylaş
                  </button>
                </div>

                {/* Silme Onay Modalı */}
                {deletingPostId === post.id && (
                  <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
                    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    zIndex: 9999, padding: '1rem'
                  }}>
                    <div style={{ 
                      background: 'var(--surface)', borderRadius: 'var(--radius-lg)', 
                      padding: '2rem', maxWidth: '400px', width: '100%',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                      animation: 'fadeInScale 0.2s ease-out'
                    }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Gönderiyi Sil</h3>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                        Bu gönderiyi silmek istediğinden emin misin? Bu işlem geri alınamaz.
                      </p>
                      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                        <button 
                          onClick={() => setDeletingPostId(null)} 
                          className="btn-secondary" 
                          style={{ padding: '0.6rem 1.25rem' }}
                        >
                          Vazgeç
                        </button>
                        <button 
                          onClick={() => handleDelete(post.id)} 
                          style={{ 
                            padding: '0.6rem 1.25rem', background: '#ef4444', color: 'white', 
                            borderRadius: 'var(--radius-md)', fontWeight: 600, border: 'none',
                            cursor: 'pointer', transition: 'all 0.2s'
                          }}
                        >
                          Evet, Sil
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .hover-text-danger:hover { color: #ef4444 !important; background: rgba(239,68,68,0.1) !important; }
      `}} />
    </div>
  );
}
