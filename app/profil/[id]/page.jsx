'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { GraduationCap, Target, BookOpen, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function PublicProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      if (!id) return;
      
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();
      
      if (profileData) {
        setProfile(profileData);
        
        const { data: postsData } = await supabase
          .from('posts')
          .select('*')
          .eq('user_id', id)
          .order('created_at', { ascending: false });
        
        if (postsData) {
          setPosts(postsData);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [id]);

  if (loading) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Yükleniyor...</div>;
  
  if (!profile) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Kullanıcı bulunamadı.</div>;

  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Profile Info */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center', height: 'fit-content' }}>
          <img 
            src={profile.avatar_url || '/default-avatar.png'} 
            alt="Avatar" 
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--primary-soft)' }} 
          />
          
          <div style={{ width: '100%' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{profile.display_name}</h1>
            <p style={{ color: 'var(--text-muted)' }}>@{profile.username}</p>
            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{profile.bio || 'Bio eklenmemiş.'}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', textAlign: 'left', background: 'var(--surface-soft)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><GraduationCap size={18} color="var(--primary)" /> <strong>Sınıf:</strong> {profile.grade || 'Belirtilmemiş'}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Target size={18} color="var(--primary)" /> <strong>Hedef:</strong> {profile.target_department || 'Belirtilmemiş'}</div>
            </div>
          </div>
        </div>

        {/* User Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
               <MessageSquare size={24} color="var(--primary)" />
               <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{posts.length} Topluluk Paylaşımı</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {posts.length === 0 ? (
              <div className="card" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Henüz hiçbir paylaşım yapmamış.</div>
            ) : (
              posts.map(post => (
                <div key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {post.lesson && (
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', background: 'var(--primary-soft)', padding: '0.2rem 0.6rem', borderRadius: '1rem', width: 'fit-content' }}>
                      {post.lesson}
                    </span>
                  )}
                  <p>{post.content}</p>
                  <small style={{ color: 'var(--text-muted)' }}>{new Date(post.created_at).toLocaleString('tr-TR')}</small>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
