'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hash, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../components/AuthProvider';

export default function MessagesIndex() {
  const { user, loading } = useAuth();
  const [channels, setChannels] = useState([]);
  const [loadingChannels, setLoadingChannels] = useState(true);

  useEffect(() => {
    async function loadChannels() {
      const { data } = await supabase.from('channels').select('*').order('created_at', { ascending: true });
      if (data) setChannels(data);
      setLoadingChannels(false);
    }
    loadChannels();
  }, []);

  if (loading || loadingChannels) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Yükleniyor...</div>;
  if (!user) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Giriş yapmanız gerekiyor.</div>;

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Mesajlar</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        
        {/* Kanallar Listesi */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Hash size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Ders Kanalları</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {channels.length === 0 ? (
              <p style={{ color: 'var(--text-muted)' }}>Henüz kanal oluşturulmamış.</p>
            ) : (
              channels.map(channel => (
                <Link 
                  key={channel.id} 
                  href={`/mesajlar/${channel.id}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', 
                    borderRadius: 'var(--radius-md)', background: 'var(--surface-soft)', transition: 'background 0.2s'
                  }}
                  className="hover-bg-primary-soft"
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                    {channel.icon || '💬'}
                  </div>
                  <div>
                    <strong style={{ display: 'block' }}>{channel.name}</strong>
                    <small style={{ color: 'var(--text-muted)' }}>{channel.description}</small>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* DM Listesi */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <MessageSquare size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Özel Mesajlar</h2>
          </div>
          <p style={{ color: 'var(--text-muted)' }}>Çok yakında! Profil sayfalarından kullanıcılarla özel mesajlaşabileceksiniz.</p>
        </div>

      </div>
    </div>
  );
}
