document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }

    const quickExitBtn = document.getElementById('quickExitBtn');
    if (quickExitBtn) quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Lógica de Carregar Perfil ---
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

    // --- Modal de Limpar Rastros ---
    const btnLimparRastros = document.getElementById('btnLimparRastros');
    const modalLimpar = document.getElementById('modalLimparRastros');
    const btnCancelarLimpeza = document.getElementById('btnCancelarLimpeza');
    const btnConfirmarLimpeza = document.getElementById('btnConfirmarLimpeza');

    if (btnLimparRastros && modalLimpar) {
        btnLimparRastros.addEventListener('click', () => modalLimpar.style.display = 'flex');
        btnCancelarLimpeza.addEventListener('click', () => modalLimpar.style.display = 'none');

        btnConfirmarLimpeza.addEventListener('click', () => {
            btnConfirmarLimpeza.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Limpando...';
            setTimeout(() => {
                localStorage.clear();
                window.location.reload();
            }, 800);
        });
    }

    // --- Camuflagem Total ---
    const toggleCamuflagem = document.getElementById('toggleCamuflagem');
    const safeArea = document.getElementById('safeArea');
    const recipeArea = document.getElementById('recipeArea');
    const btnDescamuflar = document.getElementById('btnDescamuflar');

    // Elementos do Modal de PIN
    const modalPin = document.getElementById('modalPinDescamuflar');
    const inputPin = document.getElementById('inputPinAcesso');
    const btnCancelarPin = document.getElementById('btnCancelarPin');
    const btnConfirmarPin = document.getElementById('btnConfirmarPin');
    const erroPin = document.getElementById('erroPin');

    if (toggleCamuflagem) {
        toggleCamuflagem.addEventListener('change', function() {
            if (this.checked) {
                // Ativa camuflagem
                document.title = "Cozinha & Cia - Receitas";
                document.body.style.background = "#f9fafb";
                safeArea.style.display = "none";
                recipeArea.style.display = "block";
            }
        });
    }

    // Lógica do botão de "Menu" do site de receitas (para descamuflar)
    if (btnDescamuflar && modalPin) {
        btnDescamuflar.addEventListener('click', () => {
            modalPin.style.display = 'flex'; // Abre a janelinha do PIN
            inputPin.value = ''; // Limpa o campo
            erroPin.style.display = 'none'; // Esconde mensagem de erro
            inputPin.focus(); // Coloca o cursor piscando no input
        });

        // Cancelar a descamuflagem (Voltar para o site de receitas)
        btnCancelarPin.addEventListener('click', () => {
            modalPin.style.display = 'none';
        });

        // Confirmar o PIN
        btnConfirmarPin.addEventListener('click', () => {
            const senha = inputPin.value;

            // Aceita qualquer coisa com 4 dígitos para este protótipo
            if (senha && senha.length === 4) {
                document.title = "Apoio Seguro - Configurações";
                document.body.style.background = "";

                recipeArea.style.display = "none";
                modalPin.style.display = "none"; // Fecha o modal
                safeArea.style.display = "block";
                toggleCamuflagem.checked = false; // Desativa o interruptor
            } else {
                // Se errar a quantidade de números
                erroPin.style.display = 'block';
                inputPin.value = '';
                inputPin.focus();
            }
        });

        // Permite apertar "Enter" no teclado para confirmar o PIN
        inputPin.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                btnConfirmarPin.click();
            }
        });
    }
});