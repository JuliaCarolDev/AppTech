document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida (Sempre presente) ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() {
        window.location.replace(safeUrl);
    }

    quickExitBtn.addEventListener('click', executeQuickExit);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') executeQuickExit();
    });

    // --- Lógica do Botão "Sobre nós" no Cabeçalho ---
    const btnSobreNos = document.getElementById('btnSobreNos');
    if (btnSobreNos) {
        btnSobreNos.addEventListener('click', () => {
            console.log("Abrindo página Sobre Nós...");
            alert("Em breve: Página com informações sobre a iniciativa e equipe.");
        });
    }

    // --- Redirecionamentos dos Botões do Menu ---

    // 1. Dicionário
    const btnDicionario = document.getElementById('btnDicionario');
    if (btnDicionario) {
        btnDicionario.addEventListener('click', () => {
            window.location.href = "dicionario.html";
        });
    }

    // 2. Apoio Perto
    const btnApoio = document.getElementById('btnApoio');
    if (btnApoio) {
        btnApoio.addEventListener('click', () => {
            window.location.href = "apoio.html";
        });
    }

    // 3. Emergência (Botão de Pânico)
    const btnEmergencia = document.getElementById('btnEmergencia');
    if (btnEmergencia) {
        btnEmergencia.addEventListener('click', () => {
            window.location.href = "emergencia.html";
        });
    }

    // 4. Guia Seguro
    const btnGuia = document.getElementById('btnGuia');
    if (btnGuia) {
        btnGuia.addEventListener('click', () => {
            window.location.href = "guia.html";
        });
    }

    // 5. Ligar 180 (Abre a tela de confirmação/orientação que criamos)
    const btnLigar180 = document.getElementById('btnLigar180');
    if (btnLigar180) {
        btnLigar180.addEventListener('click', () => {
            window.location.href = "ligar180.html";
        });
    }

    // 6. Mais (Configurações adicionais / Camuflagem)
    const btnMais = document.getElementById('btnMais');
    if (btnMais) {
        btnMais.addEventListener('click', () => {
            window.location.href = "mais.html";
        });
    }
});