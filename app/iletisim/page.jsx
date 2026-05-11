export default function IletisimPage() {
  return (
    <main className="legal-page-shell">
      <section className="legal-card">
        <a className="legal-back" href="/">← Ana sayfaya dön</a>

        <span className="legal-badge">İletişim</span>
        <h1>İletişim</h1>

        <p>
          Teknoders hakkında görüş, öneri, hata bildirimi veya iş birliği talepleri için bizimle iletişime geçebilirsiniz.
        </p>

        <div className="contact-box">
          <strong>E-posta</strong>
          <p>iletisim@Teknoders.com</p>
        </div>


        <h2>Geri Bildirim</h2>
        <p>
          Teknoders gelişmeye açık bir platformdur. Kullanıcı deneyimini iyileştirmek, hataları düzeltmek ve yeni araçlar
          eklemek için geri bildirimler dikkate alınır.
        </p>
      </section>
    </main>
  );
}