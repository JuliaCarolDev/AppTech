document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() {
        window.location.replace(safeUrl);
    }

    if (quickExitBtn) {
        quickExitBtn.addEventListener('click', executeQuickExit);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') executeQuickExit();
    });

    // --- Simulação de Busca no Mapa ---
    const textoBuscando = document.getElementById('textoBuscando');
    const badgeBuscando = document.getElementById('badgeBuscando');
    const iconeBuscando = badgeBuscando.querySelector('i');

    // Após 1.5 segundos, muda o texto simulando que o GPS encontrou Itapetininga
    setTimeout(() => {
        textoBuscando.textContent = "Rede de Itapetininga encontrada";

        // Remove a animação de girar
        iconeBuscando.classList.remove('icon-spin', 'fa-location-crosshairs');
        iconeBuscando.classList.add('fa-check'); // Muda para ícone de check

        // Estilo de sucesso (Verde suave)
        badgeBuscando.style.backgroundColor = "#e8f5e9";
        badgeBuscando.style.color = "#2e7d32";
        badgeBuscando.style.border = "1px solid #c8e6c9";
        iconeBuscando.style.color = "#2e7d32";
    }, 1500);
});