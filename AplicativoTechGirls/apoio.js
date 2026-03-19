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

    // --- Simulação de Busca no Mapa ---
    const textoBuscando = document.getElementById('textoBuscando');
    const badgeBuscando = document.getElementById('badgeBuscando');

    // Após 2.5 segundos, muda o texto simulando que o GPS encontrou a localização
    setTimeout(() => {
        textoBuscando.textContent = "Rede encontrada na sua região";
        badgeBuscando.style.color = "#16a34a"; // Muda o texto para verde (sucesso)
        badgeBuscando.querySelector('i').style.color = "#16a34a";
    }, 2500);
});