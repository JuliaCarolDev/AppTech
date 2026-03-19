document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }
    quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Lógica de Expandir/Recolher os Guias ---
    const guiaHeaders = document.querySelectorAll('.guia-card-header');

    guiaHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Adiciona ou remove a classe "active" do cartão clicado
            const card = header.parentElement;
            card.classList.toggle('active');

            // Seleciona o corpo do texto e a setinha
            const body = card.querySelector('.guia-card-body');
            const seta = card.querySelector('.seta');

            // Faz a animação de abrir e fechar
            if (card.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
                seta.style.transform = "rotate(180deg)";
            } else {
                body.style.maxHeight = null;
                seta.style.transform = "rotate(0deg)";
            }
        });
    });
});