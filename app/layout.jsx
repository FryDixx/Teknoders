import './globals.css';

export const metadata = {
  title: "Teknoders | AI Ders Notu ve YKS Araçları",
  description:
    "Teknoders ile AI destekli ders notları oluştur, TYT-AYT çalış, YKS net ve tahmini sıralama hesapla.",
  
  keywords: [
    "AI ders notu",
    "YKS net hesaplama",
    "TYT not oluşturucu",
    "AYT çalışma notu",
    "AI eğitim platformu",
    "TYT çalışma sitesi",
    "AYT konu özeti",
    "YKS sıralama hesaplama",
    "öğrenci araçları",
    "ders notu oluşturucu",
  ],

  metadataBase: new URL("https://teknoders.vercel.app"),

  openGraph: {
    title: "Teknoders",
    description:
      "AI destekli ders notları ve öğrenci araçları platformu.",
    url: "https://teknoders.vercel.app",
    siteName: "Teknoders",
    locale: "tr_TR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
