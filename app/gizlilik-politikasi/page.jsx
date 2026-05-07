export default function GizlilikPolitikasiPage() {
  return (
    <main className="legal-page-shell">
      <section className="legal-card">
        <a className="legal-back" href="/">← Ana sayfaya dön</a>

        <span className="legal-badge">Gizlilik</span>
        <h1>Gizlilik Politikası</h1>

        <p>
          Bu gizlilik politikası, Teknoders kullanıcılarının siteyi kullanırken hangi verilerin işlenebileceğini ve bu
          verilerin nasıl kullanılabileceğini açıklar.
        </p>

        <h2>Toplanan Bilgiler</h2>
        <p>
          Teknoders, kullanıcıların seçtiği sınıf, ders, konu, seviye ve ek istek gibi bilgileri AI ders notu oluşturmak
          amacıyla işler. Bu bilgiler ders notu üretimi için OpenAI API sistemlerine gönderilebilir.
        </p>

        <h2>Yerel Depolama</h2>
        <p>
          Oluşturulan son ders notu, kullanıcının tarayıcısında localStorage üzerinde saklanabilir. Bu, notun ayrı sayfada
          okunabilmesi için kullanılır. Kullanıcı tarayıcı verilerini temizlediğinde bu bilgi silinebilir.
        </p>

        <h2>Reklamlar ve Çerezler</h2>
        <p>
          Teknoders ileride Google AdSense gibi reklam hizmetleri kullanabilir. Bu hizmetler, reklam gösterimi ve ölçümleme
          amacıyla çerezlerden veya benzer teknolojilerden yararlanabilir.
        </p>

        <h2>Üçüncü Taraf Hizmetler</h2>
        <p>
          Teknoders, AI içerik üretimi için OpenAI API hizmetlerinden yararlanabilir. Reklam yayını için ileride Google
          AdSense kullanılabilir. Bu hizmetlerin kendi gizlilik politikaları geçerlidir.
        </p>

        <h2>Resmi Kurum Bilgilendirmesi</h2>
        <p>
          Teknoders; ÖSYM, MEB veya herhangi bir resmi kurumla bağlantılı değildir. YKS puan ve sıralama hesaplama araçları
          yalnızca tahmini sonuç üretir.
        </p>

        <h2>İletişim</h2>
        <p>
          Gizlilik politikasıyla ilgili sorular için iletişim sayfasındaki e-posta adresi üzerinden bize ulaşabilirsiniz.
        </p>
      </section>
    </main>
  );
}