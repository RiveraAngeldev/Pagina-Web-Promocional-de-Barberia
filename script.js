AOS.init();

function applyTheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const body = document.body;

  if (isDark) {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');
  } else {
    body.classList.add('theme-light');
    body.classList.remove('theme-dark');
  }
}

document.addEventListener('DOMContentLoaded', applyTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
function aplicarTemaPreferido() {
  const esOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.remove('theme-light', 'theme-dark');
  document.body.classList.add(esOscuro ? 'theme-dark' : 'theme-light');
}

aplicarTemaPreferido();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', aplicarTemaPreferido);
