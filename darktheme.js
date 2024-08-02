document.getElementById('toggleTheme').addEventListener('click', function() {
    // Alterna a classe 'dark-theme' no body
    document.body.classList.toggle('dark-theme');
    // Alterna a classe 'dark-theme' no botão
    this.classList.toggle('dark-theme');
});
