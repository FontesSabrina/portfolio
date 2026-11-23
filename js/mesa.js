/*
  MESA / MONITOR
  --------------
  Controla o monitor: ligado (LED verde) e tela cheia.
  - O botão ⛶ na barra de tarefas alterna a tela cheia.
  - No celular, ao ligar, o monitor já abre em tela cheia (a tela é pequena demais para usar dentro).
*/
window.Mesa = (function () {
  const monitor = document.getElementById("monitor");
  const btnTelaCheia = document.getElementById("btnTelaCheia");

  function estaCheia() {
    return monitor.classList.contains("cheio");
  }

  function telaCheia(ligar) {
    monitor.classList.toggle("cheio", ligar);
    document.body.classList.toggle("travado", ligar);
    btnTelaCheia.textContent = ligar ? "🗗" : "⛶";
    btnTelaCheia.setAttribute("aria-label", ligar ? "Sair da tela cheia" : "Tela cheia");
    btnTelaCheia.title = btnTelaCheia.getAttribute("aria-label");
    if (!ligar) monitor.scrollIntoView({ block: "center" });
  }

  function alternar() {
    telaCheia(!estaCheia());
  }

  function ligado(sim) {
    monitor.classList.toggle("ligado", sim);
  }

  // celular: tela pequena demais para usar o sistema dentro do monitor
  function ehCelular() {
    return window.matchMedia("(max-width: 640px)").matches;
  }

  btnTelaCheia.addEventListener("click", alternar);

  return { telaCheia, alternar, estaCheia, ligado, ehCelular };
})();
