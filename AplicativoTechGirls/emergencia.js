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

    // --- Lógica do Botão Pedir Ajuda ---
    const btnPedirAjuda = document.getElementById('btnPedirAjuda');
    const descricao = document.querySelector('.panico-descricao');
    let isSosActive = false;

    btnPedirAjuda.addEventListener('click', () => {
        if (!isSosActive) {
            isSosActive = true;

            // Muda o visual para indicar que está enviando
            btnPedirAjuda.classList.add('enviando');
            btnPedirAjuda.innerHTML = '<i class="fa-solid fa-location-dot"></i><span>ENVIANDO...</span>';
            descricao.textContent = "Obtendo localização e enviando o alerta silenciosamente...";

            // Simula o tempo de busca do GPS (3 segundos)
            setTimeout(() => {
                btnPedirAjuda.classList.remove('enviando');
                btnPedirAjuda.classList.add('enviado');
                btnPedirAjuda.innerHTML = '<i class="fa-solid fa-check"></i><span>ENVIADO</span>';

                descricao.textContent = "Alerta enviado com sucesso aos seus contatos de confiança.";
                descricao.style.color = "#d32f2f";
            }, 3000);
        }
    });

    // --- Lógica de Configurar Contatos ---
    const btnConfigurarContatos = document.getElementById('btnConfigurarContatos');
    if (btnConfigurarContatos) {
        btnConfigurarContatos.addEventListener('click', () => {
            // Redireciona para a nova tela de contatos
            window.location.href = "contatos.html";
        });
    }
});