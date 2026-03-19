document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() {
        window.location.replace(safeUrl);
    }

    quickExitBtn.addEventListener('click', executeQuickExit);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            executeQuickExit();
        }
    });

    // --- Lógica do Formulário de Login ---
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        // Previne que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Redireciona a usuária para a tela da Área Segura
        window.location.href = "dashboard.html";
    });
});