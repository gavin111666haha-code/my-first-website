const helloButton = document.getElementById('helloButton');
const message = document.getElementById('message');
helloButton.addEventListener('click', function () {
  message.textContent = '你好，Codex！';
});

const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const themeIcon = document.getElementById('themeIcon');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function updateThemeButton() {
  const dark = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : systemTheme.matches;
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
  themeLabel.textContent = dark ? '浅色模式' : '深色模式';
  themeIcon.textContent = dark ? '☀' : '☾';
}

themeToggle.addEventListener('click', function () {
  const dark = themeToggle.getAttribute('aria-pressed') === 'true';
  const theme = dark ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch (_) {}
  updateThemeButton();
});
// 未手动选择主题时，响应系统外观的实时变化。
systemTheme.addEventListener('change', updateThemeButton);
updateThemeButton();
themeToggle.hidden = false;
