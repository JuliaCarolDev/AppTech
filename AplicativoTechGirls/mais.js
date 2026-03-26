document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }

    const quickExitBtn = document.getElementById('quickExitBtn');
    if (quickExitBtn) quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Lógica de Carregar Perfil da Usuária ---
    const nomeDisplay = document.getElementById('nomeUsuarioDisplay');
    const pinDisplay = document.getElementById('pinUsuarioDisplay');

    if (nomeDisplay && pinDisplay) {
        const nomeSalvo = localStorage.getItem('apoioSeguroUser');

        if (nomeSalvo && nomeSalvo !== 'Acesso Anônimo') {
            nomeDisplay.textContent = `${nomeSalvo} (Apelido)`;
            pinDisplay.textContent = "PIN de Segurança: ••••";
        } else {
            nomeDisplay.textContent = "Acesso Anônimo";
            pinDisplay.textContent = "Sem PIN configurado";
        }
    }

    // --- Lógica de Sair da Conta ---
    const btnSairConta = document.getElementById('btnSairConta');
    if (btnSairConta) {
        btnSairConta.addEventListener('click', () => {
            if (confirm("Tem certeza que deseja sair e bloquear o aplicativo?")) {
                window.location.href = "index.html";
            }
        });
    }

    // --- Lógica de Limpar Rastros ---
    const btnLimparRastros = document.getElementById('btnLimparRastros');
    if (btnLimparRastros) {
        btnLimparRastros.addEventListener('click', () => {
            localStorage.clear();
            alert("Rastros locais apagados com sucesso!");
            window.location.reload();
        });
    }

    // --- Camuflagem Total ---
    const toggleCamuflagem = document.getElementById('toggleCamuflagem');
    const safeArea = document.getElementById('safeArea');
    const recipeArea = document.getElementById('recipeArea');
    const btnDescamuflar = document.getElementById('btnDescamuflar');

    if (toggleCamuflagem) {
        toggleCamuflagem.addEventListener('change', function() {
            if (this.checked) {
                document.title = "Cozinha & Cia - Receitas";
                document.body.style.background = "#f9fafb";

                safeArea.style.display = "none";
                recipeArea.style.display = "block";
            }
        });
    }

    if (btnDescamuflar) {
        btnDescamuflar.addEventListener('click', () => {
            const senha = prompt("Modo Seguro. Digite seu PIN de 4 dígitos para voltar:");

            if (senha && senha.length === 4) {
                document.title = "Apoio Seguro - Configurações";
                document.body.style.background = "";

                recipeArea.style.display = "none";
                safeArea.style.display = "block";
                toggleCamuflagem.checked = false;
            } else if (senha !== null) {
                alert("PIN incorreto.");
            }
        });
    }
});