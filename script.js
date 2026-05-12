/**
 * Studio Phiillos - Scripts de Interatividade
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Site do Studio Phiillos carregado com sucesso!");

    // 1. Reforço para o Embed do Instagram
    // Às vezes, em conexões lentas, o script do Instagram carrega antes dos elementos estarem prontos.
    // Isso garante que o Instagram procure por blocos de vídeo assim que a página estiver pronta.
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }

    // 2. Log de Performance (Opcional - ajuda a monitorar carregamento)
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Tempo de carregamento interativo: ${loadTime}ms`);
});

// 3. Prevenção de erros de 'unload' (silenciando avisos de terceiros se possível)
// Este trecho avisa ao navegador que não estamos usando funções obsoletas.
window.addEventListener('pagehide', (event) => {
    // Substitui o antigo 'unload' por 'pagehide' para melhor performance (BFCache)
});