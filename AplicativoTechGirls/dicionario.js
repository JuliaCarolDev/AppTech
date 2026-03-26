document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() {
        window.location.replace(safeUrl);
    }

    if (quickExitBtn) {
        quickExitBtn.addEventListener('click', executeQuickExit);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') executeQuickExit();
    });

    // --- Lógica de Pesquisa e Filtros do Dicionário ---
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.dic-card');
    const btnFiltros = document.querySelectorAll('.btn-filtro');

    // Função para aplicar filtros e pesquisa simultaneamente
    function aplicarFiltros() {
        const termoBusca = searchInput.value.toLowerCase();
        // Encontra qual botão de filtro está ativo
        const filtroAtivo = document.querySelector('.btn-filtro.active').dataset.filter;

        cards.forEach(card => {
            const titulo = card.querySelector('.dic-title').textContent.toLowerCase();
            const descricao = card.querySelector('.dic-desc').textContent.toLowerCase();
            const categoriasCard = card.dataset.category || "";

            // Verifica se o texto digitado bate com o título ou descrição
            const correspondeBusca = titulo.includes(termoBusca) || descricao.includes(termoBusca);

            // Verifica se o card pertence à categoria selecionada (ou se "todos" está selecionado)
            const correspondeFiltro = filtroAtivo === 'todos' || categoriasCard.includes(filtroAtivo);

            if (correspondeBusca && correspondeFiltro) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Evento de digitação na barra de pesquisa
    if (searchInput) {
        searchInput.addEventListener('input', aplicarFiltros);
    }

    // Evento de clique nos botões de filtro
    btnFiltros.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            btnFiltros.forEach(b => b.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');

            // Re-aplica os filtros considerando o botão clicado e o texto da pesquisa
            aplicarFiltros();
        });
    });
});