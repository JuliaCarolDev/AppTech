document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() {
        window.location.replace(safeUrl);
    }

    quickExitBtn.addEventListener('click', executeQuickExit);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') executeQuickExit();
    });

    // --- Lógica de Pesquisa do Dicionário ---
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.dic-card');

    searchInput.addEventListener('input', function() {
        const termoBusca = this.value.toLowerCase(); // Pega o que foi digitado e converte para minúsculo

        cards.forEach(card => {
            const titulo = card.querySelector('.dic-title').textContent.toLowerCase();
            const descricao = card.querySelector('.dic-desc').textContent.toLowerCase();

            // Se o título ou a descrição contiverem o texto digitado, mostra o cartão, senão oculta
            if (titulo.includes(termoBusca) || descricao.includes(termoBusca)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});