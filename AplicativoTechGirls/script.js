document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida (Sempre presente) ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }
    if (quickExitBtn) quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Lógica de Login (Salva o Nome e Redireciona) ---
    const loginForm = document.getElementById('loginForm');
    const nicknameInput = document.getElementById('nickname');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // 1. O COMANDO MÁGICO: Impede que o formulário recarregue a página antes da hora
            event.preventDefault();

            // 2. Pega o nome que a pessoa digitou
            const nomeDigitado = nicknameInput.value.trim();

            // 3. Salva no armazenamento do navegador
            if (nomeDigitado !== '') {
                localStorage.setItem('apoioSeguroUser', nomeDigitado);
            } else {
                // Se por acaso passar vazio, salva como anônimo
                localStorage.setItem('apoioSeguroUser', 'Acesso Anônimo');
            }

            // 4. Agora sim, com tudo salvo, mandamos a usuária para o Dashboard!
            window.location.href = "dashboard.html";
        });
    }
});