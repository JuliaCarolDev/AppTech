document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida (Sempre presente) ---
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

    // --- Lógica do Botão "Sobre nós" no Cabeçalho ---
    const btnSobreNos = document.getElementById('btnSobreNos');
    if (btnSobreNos) {
        btnSobreNos.addEventListener('click', () => {
            console.log("Abrindo página Sobre Nós...");
            alert("Em breve: Página com informações sobre a iniciativa e equipe.");
        });
    }

    // --- Redirecionamentos dos Botões do Menu ---
    const btnDicionario = document.getElementById('btnDicionario');
    if (btnDicionario) btnDicionario.addEventListener('click', () => window.location.href = "dicionario.html");

    const btnApoio = document.getElementById('btnApoio');
    if (btnApoio) btnApoio.addEventListener('click', () => window.location.href = "apoio.html");

    const btnEmergencia = document.getElementById('btnEmergencia');
    if (btnEmergencia) btnEmergencia.addEventListener('click', () => window.location.href = "emergencia.html");

    const btnGuia = document.getElementById('btnGuia');
    if (btnGuia) btnGuia.addEventListener('click', () => window.location.href = "guia.html");

    const btnLigar180 = document.getElementById('btnLigar180');
    if (btnLigar180) btnLigar180.addEventListener('click', () => window.location.href = "ligar180.html");

    const btnMais = document.getElementById('btnMais');
    if (btnMais) btnMais.addEventListener('click', () => window.location.href = "mais.html");

    // --- Lógica da Barra de Pesquisa com Ícones ---
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Lista de telas com ícones adicionados
    const rotasApp = [
        { termo: "Camuflagem do app", url: "mais.html", icon: "fa-solid fa-mask" },
        { termo: "Dicionário", url: "dicionario.html", icon: "fa-solid fa-book" },
        { termo: "Apoio Perto", url: "apoio.html", icon: "fa-solid fa-map-location-dot" },
        { termo: "Emergência", url: "emergencia.html", icon: "fa-solid fa-triangle-exclamation" },
        { termo: "Guia Seguro", url: "guia.html", icon: "fa-solid fa-shield-halved" },
        { termo: "Ligar 180", url: "ligar180.html", icon: "fa-solid fa-phone" },
        { termo: "Gerenciar perfil", url: "perfil.html", icon: "fa-solid fa-user-gear" },
        { termo: "Contatos de segurança", url: "contatos.html", icon: "fa-solid fa-user-shield" }
    ];

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            searchResults.innerHTML = ''; // Limpa os resultados anteriores

            if (query.length > 0) {
                // Filtra as opções que contém o que foi digitado
                const filtrados = rotasApp.filter(item => item.termo.toLowerCase().includes(query));

                if (filtrados.length > 0) {
                    searchResults.style.display = 'block';

                    // Cria os itens da lista com HTML para incluir o ícone
                    filtrados.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = `<i class="${item.icon}"></i> <span>${item.termo}</span>`;

                        // Redireciona ao clicar
                        li.addEventListener('click', () => {
                            window.location.href = item.url;
                        });

                        searchResults.appendChild(li);
                    });
                } else {
                    searchResults.style.display = 'none';
                }
            } else {
                searchResults.style.display = 'none'; // Esconde se apagar o texto
            }
        });

        // Esconder a lista se clicar fora da barra de pesquisa
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    // --- Lógica do Carrossel Educativo ---
    const carouselSlides = document.getElementById('carouselSlides');
    const carouselDots = document.getElementById('carouselDots');
    const slides = document.querySelectorAll('.slide');

    if (carouselSlides && carouselDots && slides.length > 0) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            carouselDots.appendChild(dot);

            dot.addEventListener('click', () => {
                slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            });
        });

        const dots = document.querySelectorAll('.dot');

        carouselSlides.addEventListener('scroll', () => {
            const scrollPosition = carouselSlides.scrollLeft;
            const slideWidth = slides[0].offsetWidth;
            const activeIndex = Math.round(scrollPosition / slideWidth);

            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });

        let autoPlayIndex = 0;
        setInterval(() => {
            autoPlayIndex = (autoPlayIndex + 1) % slides.length;
            slides[autoPlayIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }, 5000);
    }
});