document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }
    quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Lógica de Adicionar e Remover Contatos ---
    const formContato = document.getElementById('formContato');
    const listaContatos = document.getElementById('listaContatos');
    const nomeContato = document.getElementById('nomeContato');
    const telefoneContato = document.getElementById('telefoneContato');

    formContato.addEventListener('submit', (event) => {
        // Evita que a página recarregue ao enviar o formulário
        event.preventDefault();

        const nome = nomeContato.value.trim();
        const telefone = telefoneContato.value.trim();

        if (nome !== '' && telefone !== '') {
            // Cria o elemento do novo cartão de contato
            const card = document.createElement('div');
            card.className = 'contato-card';

            card.innerHTML = `
                <div class="contato-info">
                    <h4>${nome}</h4>
                    <p>${telefone}</p>
                </div>
                <button class="btn-remover" title="Remover contato"><i class="fa-solid fa-trash"></i></button>
            `;

            // Adiciona a função de remover ao botão de lixeira deste novo cartão
            card.querySelector('.btn-remover').addEventListener('click', function() {
                card.remove();
            });

            // Adiciona o cartão à lista na tela
            listaContatos.appendChild(card);

            // Limpa os campos do formulário para o próximo
            nomeContato.value = '';
            telefoneContato.value = '';
        }
    });

    // Garante que o botão de lixeira do contato de exemplo (Mãe) também funcione
    const lixeirasExistentes = document.querySelectorAll('.btn-remover');
    lixeirasExistentes.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.contato-card').remove();
        });
    });
});