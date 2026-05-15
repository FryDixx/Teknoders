'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthProvider';
import {
  Home, BookOpen, Calculator, Users, MessageCircle,
  User, LogOut, LogIn, Menu, X, Sun, Moon, ChevronDown
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Ana Sayfa', icon: Home },
  { href: '/not-olustur', label: 'AI Not', icon: BookOpen },
  { href: '/yks-hesaplama', label: 'YKS Araçları', icon: Calculator },
  { href: '/topluluk', label: 'Topluluk', icon: Users },
  { href: '/mesajlar', label: 'Mesajlar', icon: MessageCircle },
];

export default function Navbar() {
  const { user, profile, loginWithGoogle, logout } = useAuth();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const profileRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('teknoders-theme') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('teknoders-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  }

  function handleNavClick(href) {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
  }

  return (
    <header className="tk-header">
      <div className="tk-header-inner">
        <Link href="/" className="tk-brand">
          <img src="/logo.png" alt="Teknoders" className="tk-brand-img" />
          <div>
            <strong>Teknoders</strong>
            <small>Öğrenci Platformu</small>
          </div>
        </Link>

        <nav className={`tk-nav ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]) && link.href.split('#')[0] !== '/');
            return link.href.startsWith('/#') ? (
              <button key={link.href} className={`tk-nav-link ${isActive ? 'active' : ''}`} onClick={() => handleNavClick(link.href)}>
                <Icon size={18} />
                <span>{link.label}</span>
              </button>
            ) : (
              <Link key={link.href} href={link.href} className={`tk-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="tk-header-actions">
          <button className="tk-theme-btn" onClick={toggleTheme} title="Tema değiştir">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {user ? (
            <div className="tk-profile-wrap" ref={profileRef}>
              <button className="tk-profile-trigger" onClick={() => setProfileOpen(!profileOpen)}>
                <img src={profile?.avatar_url || user.user_metadata?.avatar_url} alt="" className="tk-avatar" />
                <span className="tk-profile-name">{profile?.display_name || user.user_metadata?.name}</span>
                <ChevronDown size={14} />
              </button>
              {profileOpen && (
                <div className="tk-profile-dropdown">
                  <Link href="/profil" className="tk-dropdown-item" onClick={() => setProfileOpen(false)}>
                    <User size={16} /> Profilim
                  </Link>
                  <button className="tk-dropdown-item tk-logout" onClick={logout}>
                    <LogOut size={16} /> Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="tk-login-btn" onClick={loginWithGoogle}>
              <LogIn size={16} /> Giriş Yap
            </button>
          )}

          <button className="tk-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
