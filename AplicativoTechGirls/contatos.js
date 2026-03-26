document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Saída Rápida ---
    const quickExitBtn = document.getElementById('quickExitBtn');
    const safeUrl = 'https://www.google.com.br';

    function executeQuickExit() { window.location.replace(safeUrl); }
    if (quickExitBtn) quickExitBtn.addEventListener('click', executeQuickExit);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') executeQuickExit(); });

    // --- Lógica de Adicionar e Remover Contatos ---
    const formContato = document.getElementById('formContato');
    const listaContatos = document.getElementById('listaContatos');
    const nomeContato = document.getElementById('nomeContato');
    const telefoneContato = document.getElementById('telefoneContato');
    const badgeContador = document.querySelector('.badge-contador');

    // Array de cores para os avatares novos
    const coresAvatar = ['bg-pink', 'bg-purple', 'bg-orange', 'bg-red', 'bg-grey'];
    let corIndex = 0;

    function atualizarContador() {
        const total = document.querySelectorAll('.contato-card').length;
        badgeContador.textContent = `${total}/5`;

        // Desabilita o botão se atingir o limite (opcional)
        const btnAdd = document.querySelector('.btn-adicionar');
        if (total >= 5) {
            btnAdd.disabled = true;
            btnAdd.style.opacity = '0.5';
            btnAdd.innerHTML = '<i class="fa-solid fa-lock"></i> Limite Atingido';
        } else {
            btnAdd.disabled = false;
            btnAdd.style.opacity = '1';
            btnAdd.innerHTML = '<i class="fa-solid fa-plus"></i> Salvar Contato';
        }
    }

    formContato.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = nomeContato.value.trim();
        const telefone = telefoneContato.value.trim();
        const totalContatos = document.querySelectorAll('.contato-card').length;

        if (nome !== '' && telefone !== '' && totalContatos < 5) {
            const card = document.createElement('div');
            card.className = 'contato-card';

            // Seleciona uma cor para o avatar
            const corAtual = coresAvatar[corIndex % coresAvatar.length];
            corIndex++;

            card.innerHTML = `
                <div class="contato-avatar ${corAtual}">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="contato-info">
                    <h4>${nome}</h4>
                    <p>${telefone}</p>
                </div>
                <button class="btn-remover" title="Remover contato"><i class="fa-solid fa-trash"></i></button>
            `;

            card.querySelector('.btn-remover').addEventListener('click', function() {
                card.remove();
                atualizarContador();
            });

            listaContatos.appendChild(card);

            nomeContato.value = '';
            telefoneContato.value = '';
            atualizarContador();
        }
    });

    // Lixeiras iniciais
    const lixeirasExistentes = document.querySelectorAll('.btn-remover');
    lixeirasExistentes.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.contato-card').remove();
            atualizarContador();
        });
    });
});