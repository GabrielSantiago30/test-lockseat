let currentMode = localStorage.getItem('color-mode') || 'light';

function applyMode(mode) {
  document.body.classList.remove('light-mode', 'dark-mode', 'device-mode');
  document.body.classList.add(`${mode}-mode`);
  localStorage.setItem('color-mode', mode);
}

function toggleColorMode() {
  if (currentMode === 'light') {
    currentMode = 'dark';
  } else if (currentMode === 'dark') {
    currentMode = 'device';
  } else {
    currentMode = 'light';
  }
  applyMode(currentMode);
}

// Inicializa o modo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  applyMode(currentMode);
});
