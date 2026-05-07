/* shared/navbar.js — inject navbar & footer into every page */

const PAGES = {
    'index.html':         'home',
    'about.html':         'about',
    'services.html':      'services',
    'projects.html':      'projects',
    'clients.html':       'clients',
    'team.html':          'team',
    'contact.html':       'contact',
    'quanta-proust.html': 'products',
    'fankacy.html':       'products',
};

function getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return PAGES[path] || '';
}

function isActive(key) {
    return getCurrentPage() === key ? 'active-link' : '';
}

function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Inject Navbar ── */
function injectNavbar() {
    const active = getCurrentPage();
    const navHTML = `
<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-wrap">
    <a href="index.html" class="nav-brand">
      <img src="images/fanka.png" alt="PT. Fanka Solusi Indonesia" class="nav-logo">
      <div class="nav-brand-text">
        <span class="name">FANKA SOLUSI INDONESIA</span>
        <span class="tag">ALL SERVICES ONE GOAL</span>
      </div>
    </a>

    <ul class="nav-links" id="navLinks">
      <li><a href="index.html"    class="${active==='home'    ?'active-link':''}">Home</a></li>
      <li><a href="about.html"    class="${active==='about'   ?'active-link':''}">About</a></li>
      <li><a href="services.html" class="${active==='services'?'active-link':''}">Services</a></li>

      <li class="nav-dropdown">
        <a href="#" class="${active==='products'?'active-link':''}" onclick="return false;">
          Produk <i class="fas fa-chevron-down"></i>
        </a>
        <div class="dropdown-menu">
          <a href="quanta-proust.html">
            <i class="fas fa-flask"></i>
            <span class="d-label">Quanta Proust Indonesia<small>Lab Uji &amp; Audit CEMS</small></span>
          </a>
          <a href="fankacy.html">
            <i class="fas fa-bullhorn"></i>
            <span class="d-label">Fankacy<small>Advertising &amp; Social Media</small></span>
          </a>
        </div>
      </li>

      <li><a href="projects.html" class="${active==='projects'?'active-link':''}">Projects</a></li>
      <li><a href="clients.html"  class="${active==='clients' ?'active-link':''}">Clients</a></li>
      <li><a href="team.html"     class="${active==='team'    ?'active-link':''}">Team</a></li>
      <li><a href="contact.html"  class="${active==='contact' ?'active-link':''}">Contact</a></li>
      <li><a href="contact.html" class="nav-cta-btn">Hubungi Kami</a></li>
    </ul>

    <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    /* Hamburger toggle */
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a:not(.nav-dropdown > a)').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    /* Scroll effects */
    const navbar = document.getElementById('navbar');
    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
        if (scrollBtn) scrollBtn.classList.toggle('show', window.scrollY > 60);
    }, { passive: true });
}

/* ── Inject Footer ── */
function injectFooter() {
    const footerHTML = `
<footer>
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-brand" style="display:inline-flex;">
            <img src="images/fanka.png" alt="PT. Fanka Solusi Indonesia" class="nav-logo">
            <div class="nav-brand-text">
              <span class="name">FANKA SOLUSI INDONESIA</span>
              <span class="tag">www.fankasolusindo.co.id</span>
            </div>
          </a>
          <p>Perusahaan engineering terpercaya yang menyediakan solusi komprehensif di bidang teknik sipil, mekanikal, elektrikal, kimia, dan lingkungan sejak 2020.</p>
          <span class="footer-badge">ALL SERVICES ONE GOAL</span>
        </div>

        <div class="footer-col">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="index.html"><i class="fas fa-chevron-right"></i> Home</a></li>
            <li><a href="about.html"><i class="fas fa-chevron-right"></i> Tentang Kami</a></li>
            <li><a href="services.html"><i class="fas fa-chevron-right"></i> Layanan</a></li>
            <li><a href="projects.html"><i class="fas fa-chevron-right"></i> Proyek</a></li>
            <li><a href="clients.html"><i class="fas fa-chevron-right"></i> Klien</a></li>
            <li><a href="team.html"><i class="fas fa-chevron-right"></i> Tim</a></li>
            <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Kontak</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Produk</h4>
          <ul>
            <li><a href="quanta-proust.html"><i class="fas fa-chevron-right"></i> Quanta Proust Indonesia</a></li>
            <li><a href="fankacy.html"><i class="fas fa-chevron-right"></i> Fankacy</a></li>
          </ul>
          <h4 style="margin-top:20px;">Layanan</h4>
          <ul>
            <li><a href="services.html"><i class="fas fa-chevron-right"></i> Services &amp; Maintenance</a></li>
            <li><a href="services.html"><i class="fas fa-chevron-right"></i> Engineering Design</a></li>
            <li><a href="services.html"><i class="fas fa-chevron-right"></i> IT &amp; Integration</a></li>
            <li><a href="services.html"><i class="fas fa-chevron-right"></i> Supply &amp; Procurement</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Kontak</h4>
          <div class="fc-item"><i class="fas fa-phone-alt"></i><span>+62878-7258-6115</span></div>
          <div class="fc-item"><i class="fas fa-envelope"></i><span>fankasolusindo@gmail.com</span></div>
          <div class="fc-item"><i class="fas fa-globe"></i><span>www.fankasolusindo.co.id</span></div>
          <div class="fc-item"><i class="fas fa-map-marker-alt"></i><span>Bekasi, Jawa Barat, Indonesia</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <p>© 2025 <span>PT. Fanka Solusi Indonesia</span>. All Rights Reserved. &nbsp;·&nbsp; Berdiri sejak 2020 &nbsp;·&nbsp; Bekasi, Indonesia</p>
    </div>
  </div>
</footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

/* ── Reveal on Scroll ── */
function initReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
    document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
}

/* ── Scroll to Top ── */
function injectScrollTop() {
    const btn = document.createElement('button');
    btn.id = 'scrollTop';
    btn.setAttribute('aria-label','Scroll to top');
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);
}

/* ── Toast ── */
function injectToast() {
    const t = document.createElement('div');
    t.className = 'toast';
    t.id = 'toast';
    t.setAttribute('role','status');
    t.setAttribute('aria-live','polite');
    document.body.appendChild(t);
}

function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3800);
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
    injectScrollTop();
    injectToast();
    initReveal();
});
