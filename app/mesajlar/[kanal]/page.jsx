'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../components/AuthProvider';
import { Send, Hash, Image as ImageIcon, X } from 'lucide-react';
import Link from 'next/link';

export default function ChannelPage() {
  const { kanal } = useParams();
  const { user, profile } = useAuth();
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    async function loadData() {
      const { data: channelData } = await supabase.from('channels').select('*').eq('id', kanal).single();
      setChannel(channelData);

      const { data: messagesData } = await supabase
        .from('messages')
        .select('*, profiles(display_name, avatar_url)')
        .eq('channel_id', kanal)
        .order('created_at', { ascending: true });
      
      setMessages(messagesData || []);
    }

    if (kanal) {
      loadData();
    }

    const subscription = supabase
      .channel(`public:messages:channel_id=eq.${kanal}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `channel_id=eq.${kanal}` }, async (payload) => {
        const { data: profileData } = await supabase.from('profiles').select('display_name, avatar_url').eq('id', payload.new.user_id).single();
        const msg = { ...payload.new, profiles: profileData };
        setMessages((prev) => [...prev, msg]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [kanal]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function handleImageSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('Fotoğraf boyutu en fazla 5MB olabilir!');
      return;
    }
    setSelectedImage(file);
  }

  async function sendMessage(e) {
    e.preventDefault();
    if ((!newMessage.trim() && !selectedImage) || !user || uploading) return;

    setUploading(true);
    let imageUrl = null;

    if (selectedImage) {
      const fileExt = selectedImage.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage.from('chat-images').upload(filePath, selectedImage);
      
      if (!uploadError) {
        const { data } = supabase.storage.from('chat-images').getPublicUrl(filePath);
        imageUrl = data.publicUrl;
      }
    }

    const content = newMessage || (imageUrl ? '📷 Fotoğraf paylaştı' : '');

    const { error } = await supabase.from('messages').insert({
      channel_id: kanal,
      user_id: user.id,
      content,
      image_url: imageUrl
    });

    if (error) {
      alert('Mesaj gönderilemedi: ' + error.message);
    } else {
      setNewMessage('');
      setSelectedImage(null);
    }
    setUploading(false);
  }

  if (!channel) return <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Yükleniyor...</div>;

  return (
    <div className="container" style={{ padding: '2rem 1rem', height: 'calc(100vh - 4.5rem)', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
          {channel.icon || <Hash />}
        </div>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>{channel.name}</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>{channel.description}</p>
        </div>
      </div>

      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {messages.map((msg, idx) => {
            const isMe = msg.user_id === user?.id;
            const showHeader = idx === 0 || messages[idx - 1].user_id !== msg.user_id || (new Date(msg.created_at) - new Date(messages[idx - 1].created_at)) > 300000;
            
            return (
              <div key={msg.id} style={{ display: 'flex', gap: '1rem', flexDirection: isMe ? 'row-reverse' : 'row' }}>
                {showHeader ? (
                  <Link href={`/profil/${msg.user_id}`}>
                    <img src={msg.profiles?.avatar_url || '/default-avatar.png'} alt="Avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                  </Link>
                ) : (
                  <div style={{ width: '36px' }}></div>
                )}
                
                <div style={{ maxWidth: '70%', display: 'flex', flexDirection: 'column', alignItems: isMe ? 'flex-end' : 'flex-start' }}>
                  {showHeader && (
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem', flexDirection: isMe ? 'row-reverse' : 'row' }}>
                      <Link href={`/profil/${msg.user_id}`}>
                        <strong style={{ fontSize: '0.875rem' }}>{msg.profiles?.display_name || 'Kullanıcı'}</strong>
                      </Link>
                      <small style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                        {new Date(msg.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                      </small>
                    </div>
                  )}
                  <div style={{ 
                    background: isMe ? 'var(--primary)' : 'var(--surface-soft)', 
                    color: isMe ? 'white' : 'var(--text)', 
                    padding: '0.75rem 1rem', 
                    borderRadius: 'var(--radius-lg)',
                    borderTopRightRadius: isMe && showHeader ? '0.25rem' : 'var(--radius-lg)',
                    borderTopLeftRadius: !isMe && showHeader ? '0.25rem' : 'var(--radius-lg)',
                    display: 'flex', flexDirection: 'column', gap: '0.5rem'
                  }}>
                    {msg.image_url && (
                      <a href={msg.image_url} target="_blank" rel="noreferrer">
                        <img src={msg.image_url} alt="Paylaşım" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.2)' }} />
                      </a>
                    )}
                    {msg.content && <span>{msg.content}</span>}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {selectedImage && (
          <div style={{ padding: '0.5rem 1rem', background: 'var(--surface-soft)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Seçilen: {selectedImage.name}</span>
            <button type="button" onClick={() => setSelectedImage(null)} style={{ color: 'var(--danger)' }}><X size={16} /></button>
          </div>
        )}

        <form onSubmit={sendMessage} style={{ padding: '1rem', borderTop: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <label 
            style={{ 
              cursor: 'pointer', 
              padding: '0.6rem 1rem', 
              color: 'var(--primary)', 
              background: 'var(--primary-soft)', 
              borderRadius: '2rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s' 
            }} 
            className="hover-bg-primary-soft"
          >
            <ImageIcon size={20} />
            <span className="hidden-mobile">Fotoğraf Ekle</span>
            <input type="file" accept="image/*" onChange={handleImageSelect} style={{ display: 'none' }} disabled={uploading || !user} />
          </label>
          <input 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            placeholder={`#${channel.name} kanalına mesaj gönder...`}
            disabled={!user || uploading}
            style={{ flex: 1, minWidth: '200px', borderRadius: '2rem' }}
          />
          <button type="submit" disabled={!user || (!newMessage.trim() && !selectedImage) || uploading} className="btn-primary" style={{ borderRadius: '50%', width: '48px', height: '48px', padding: 0, flexShrink: 0 }}>
            {uploading ? <div style={{ width: '20px', height: '20px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} /> : <Send size={20} style={{ marginLeft: '4px' }} />}
          </button>
        </form>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
