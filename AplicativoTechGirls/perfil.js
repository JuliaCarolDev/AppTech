document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }
    if (quickExitBtn) quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Elementos do Formulário ---
    const formPerfil = document.getElementById('formPerfil');
    const nomeEdit = document.getElementById('nomeEdit');
    const pinEdit = document.getElementById('pinEdit');
    const btnMostrarSenha = document.getElementById('btnMostrarSenha');

    // --- Elementos do Modal de Sucesso ---
    const modalSucesso = document.getElementById('modalSucesso');
    const btnOkSucesso = document.getElementById('btnOkSucesso');

    // 1. Carregar os dados atuais ao abrir a página
    const nomeSalvo = localStorage.getItem('apoioSeguroUser');
    const pinSalvo = localStorage.getItem('apoioSeguroPin'); // Novo item que vamos salvar

    if (nomeSalvo && nomeSalvo !== 'Acesso Anônimo') {
        nomeEdit.value = nomeSalvo;
    }
    if (pinSalvo) {
        pinEdit.value = pinSalvo;
    }

    // 2. Lógica para Mostrar/Ocultar o PIN
    if (btnMostrarSenha) {
        btnMostrarSenha.addEventListener('click', function() {
            if (pinEdit.type === "password") {
                pinEdit.type = "text";
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                pinEdit.type = "password";
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    }

    // 3. Salvar as alterações
    if (formPerfil) {
        formPerfil.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede a página de recarregar

            const novoNome = nomeEdit.value.trim();
            const novoPin = pinEdit.value.trim();

            // Validação simples do PIN
            if (novoPin.length !== 4 || isNaN(novoPin)) {
                alert("O PIN deve conter exatamente 4 números.");
                return;
            }

            // Salva no navegador
            localStorage.setItem('apoioSeguroUser', novoNome);
            localStorage.setItem('apoioSeguroPin', novoPin);

            // Exibe o modal de sucesso bonito
            modalSucesso.style.display = 'flex';
        });
    }

    // 4. Fechar o modal e voltar para configurações
    if (btnOkSucesso) {
        btnOkSucesso.addEventListener('click', () => {
            modalSucesso.style.display = 'none';
            window.location.href = "mais.html"; // Volta para a tela "Mais"
        });
    }
});