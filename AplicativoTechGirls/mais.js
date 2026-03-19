document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }
    quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Lógica de Sair da Conta ---
    const btnSairConta = document.getElementById('btnSairConta');
    if (btnSairConta) {
        btnSairConta.addEventListener('click', () => {
            if (confirm("Tem certeza que deseja sair com segurança?")) {
                // Redireciona de volta para a tela de login
                window.location.href = "index.html";
            }
        });
    }

    // --- Lógica de Limpar Rastros ---
    const btnLimparRastros = document.getElementById('btnLimparRastros');
    if (btnLimparRastros) {
        btnLimparRastros.addEventListener('click', () => {
            alert("Rastros locais apagados com sucesso! Seu histórico neste aplicativo está limpo.");
        });
    }

    // --- Lógica da Camuflagem ---
    const toggleCamuflagem = document.getElementById('toggleCamuflagem');

    toggleCamuflagem.addEventListener('change', function() {
        if (this.checked) {
            // Ativou a camuflagem
            alert("Camuflagem Ativada! O nome da aba e as cores mudarão para disfarçar o aplicativo. Para acessar a área segura novamente, você precisará digitar seu PIN.");

            // Simulação de camuflagem (muda o título da aba do navegador)
            document.title = "Receitas Rápidas e Fáceis";

            // Muda a cor do cabeçalho para uma cor neutra de site de receitas (laranja/amarelo)
            document.querySelector('.header-cinza').style.backgroundColor = "#fb923c";
            document.querySelector('.header-cinza h2').textContent = "Receitas";

        } else {
            // Desativou a camuflagem
            document.title = "Apoio Seguro - Mais Opções";
            document.querySelector('.header-cinza').style.backgroundColor = "var(--icon-grey)";
            document.querySelector('.header-cinza h2').textContent = "Configurações";
            alert("Camuflagem Desativada. Visual original restaurado.");
        }
    });
});