const PHONE = '+905466398033';
const PHONE_DISPLAY = '0546 639 80 33';

function getNavHTML(activePage) {
  const pages = [
    { href: 'index.html', label: 'Ana Sayfa' },
    { href: 'liposuction.html', label: 'Liposuction' },
    { href: 'rinoplasti.html', label: 'Rinoplasti' },
    { href: 'karin-germe.html', label: 'Karın Germe' },
    { href: 'lipodem.html', label: 'Lipödem' },
    { href: 'yuz-germe.html', label: 'Yüz Germe' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  return `
  <nav>
    <a href="index.html" class="nav-logo">
      Op. Dr. Turab İsmayilov
      <span>Plastik & Estetik Cerrahi</span>
    </a>
    <ul class="nav-links" id="navLinks">${links}</ul>
    <a href="#iletisim" class="nav-cta">Randevu Al</a>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </div>
  </nav>
  `;
}

function getWhatsApp() {
  return `
  <a href="https://wa.me/${PHONE}?text=Merhaba%2C%20randevu%20almak%20istiyorum."
     class="whatsapp-float" target="_blank" rel="noopener" title="WhatsApp ile İletişim">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
  `;
}

function getFooterHTML() {
  return `
  <footer>
    <div class="footer-logo">Op. Dr. Turab İsmayilov</div>
    <p>Plastik, Estetik ve Rekonstrüktif Cerrahi Uzmanı</p>
    <div class="gold-divider"></div>
    <div class="footer-links">
      <a href="index.html">Ana Sayfa</a>
      <a href="liposuction.html">Liposuction</a>
      <a href="rinoplasti.html">Rinoplasti</a>
      <a href="karin-germe.html">Karın Germe</a>
      <a href="lipodem.html">Lipödem</a>
      <a href="yuz-germe.html">Yüz Germe</a>
    </div>
    <div class="footer-links" style="margin-top:0;">
      <a href="index.html#sss">SSS</a>
      <a href="index.html#yorumlar">Hasta Yorumları</a>
      <a href="index.html#kvkk">KVKK</a>
      <a href="#">Gizlilik Politikası</a>
    </div>
    <p>📍 Teşvikiye Mah., Sezai Selek Sokak No:17, Şişli / İstanbul</p>
    <p>📞 ${PHONE_DISPLAY}</p>
    <p class="footer-copy">© 2025 Op. Dr. Turab İsmayilov. Tüm hakları saklıdır.</p>
  </footer>
  `;
}

function getFormHTML(serviceName) {
  return `
  <div class="contact-form">
    <div class="form-row">
      <div class="form-group">
        <label>Ad Soyad</label>
        <input type="text" id="form-name" placeholder="Adınız Soyadınız" required autocomplete="name">
      </div>
      <div class="form-group">
        <label>Telefon</label>
        <input type="tel" id="form-tel" placeholder="05XX XXX XX XX" required autocomplete="tel" inputmode="tel">
      </div>
    </div>
    <div class="form-group">
      <label>İlgilendiğiniz Operasyon</label>
      <select id="form-service">
        <option value="${serviceName}" selected>${serviceName}</option>
        <option>Liposuction</option>
        <option>Rinoplasti</option>
        <option>Karın Germe</option>
        <option>Lipödem Tedavisi</option>
        <option>Yüz Germe</option>
        <option>Diğer / Birden Fazla</option>
      </select>
    </div>
    <div class="form-group">
      <label>Mesajınız (İsteğe Bağlı)</label>
      <textarea id="form-msg" placeholder="Sorularınızı buraya yazabilirsiniz..."></textarea>
    </div>
    <div class="form-group" style="margin-bottom:24px;">
      <label style="flex-direction:row;align-items:flex-start;gap:10px;cursor:pointer;text-transform:none;letter-spacing:0;font-size:0.75rem;color:rgba(245,240,232,0.5);">
        <input type="checkbox" id="form-kvkk" style="margin-top:2px;flex-shrink:0;accent-color:var(--gold);">
        <span>Kişisel verilerimin KVKK kapsamında işlenmesine onay veriyorum. <a href="index.html#kvkk" style="color:var(--gold);text-decoration:underline;">Aydınlatma metnini oku</a></span>
      </label>
    </div>
    <button class="btn-gold" onclick="submitForm(event)">Ücretsiz Konsültasyon Talep Et</button>
    <p style="font-size:0.65rem;color:rgba(136,136,136,0.6);text-align:center;margin-top:12px;letter-spacing:0.5px;">Bilgileriniz gizli tutulur · Üçüncü şahıslarla paylaşılmaz</p>
  </div>
  `;
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('form-name');
  const tel = document.getElementById('form-tel');
  const kvkk = document.getElementById('form-kvkk');

  if (!name || !name.value.trim()) {
    alert('Lütfen adınızı ve soyadınızı girin.');
    return;
  }
  if (!tel || !tel.value.trim()) {
    alert('Lütfen telefon numaranızı girin.');
    return;
  }
  if (!kvkk || !kvkk.checked) {
    alert('Devam etmek için KVKK onayı gereklidir.');
    return;
  }

  const btn = e.target;
  btn.textContent = 'Gönderildi ✓';
  btn.style.background = 'var(--gold)';
  btn.style.color = 'var(--black)';
  btn.disabled = true;

  const service = document.getElementById('form-service') ? document.getElementById('form-service').value : '';
  const msg = document.getElementById('form-msg') ? document.getElementById('form-msg').value : '';
  const waText = encodeURIComponent(
    `Merhaba, randevu almak istiyorum.\nAd Soyad: ${name.value.trim()}\nTelefon: ${tel.value.trim()}${service ? '\nOperasyon: ' + service : ''}${msg ? '\nMesaj: ' + msg : ''}`
  );

  setTimeout(() => {
    window.open(`https://wa.me/${PHONE}?text=${waText}`, '_blank');
  }, 500);
}
