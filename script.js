/**
 * Studio Phillos - Scripts de Interatividade
 * Desenvolvido por: Romulo Evangelista
 */

document.addEventListener("DOMContentLoaded", function() {
    // --- 1. Inicialização e Feedback ---
    console.log("Site do Studio Phillos carregado com sucesso!");

    // --- 2. Controle do Menu Hamburger (Mobile) ---
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    if (menu && menuLinks) {
        // Abre/Fecha menu ao clicar no ícone
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });

        // Fecha o menu automaticamente ao clicar em um link (âncora)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-active');
                menuLinks.classList.remove('active');
            });
        });
    }

    // --- 3. Reforço para Embeds do Instagram ---
    // Garante que os vídeos sejam renderizados se o script do Instagram carregar antes da página
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }

    // --- 4. Log de Performance (Opcional) ---
    if (window.performance) {
        const timing = window.performance.getEntriesByType("navigation")[0];
        const loadTime = Math.round(timing.domContentLoadedEventEnd);
        console.log(`Tempo de carregamento: ${loadTime}ms`);
    }
});

// --- 5. Otimização de Performance (BFCache) ---
// Substitui o evento 'unload' obsoleto para evitar avisos no console e melhorar a navegação
window.addEventListener('pagehide', () => {
    // Evento disparado quando o usuário sai da página
});