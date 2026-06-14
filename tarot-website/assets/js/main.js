async function loadConfig(file) {
  const res = await fetch('config/' + file);
  return res.json();
}

async function loadNav() {
  const g = await loadConfig('global.json');
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const links = { 'index.html': 'Home', 'about.html': 'About', 'services.html': 'Services', 'blog.html': 'Blog', 'contact.html': 'Contact' };
  document.querySelector('.nav-logo').textContent = '✦ ' + g.site_name;
  const nav = document.querySelector('.nav-links');
  nav.innerHTML = Object.entries(links).map(([file, label]) =>
    `<li><a href="${file}" class="${currentPage === file ? 'active' : ''}">${label}</a></li>`
  ).join('');
  document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} ${g.site_name} · Made with ✦ · <a href="mailto:${g.email}">${g.email}</a>`;
}

loadNav();
