/*
  ÁREA DE TRABALHO (dentro do monitor)
  ------------------------------------
  Monta os ícones a partir de APPS (js/apps.js) e abre uma janela ao clicar.
  Se o app tiver a função abrir(), ela monta o conteúdo (é assim que a galeria de projetos funciona).
  Esc fecha a janela; se não tiver janela aberta, sai da tela cheia.
*/
window.Desktop = (function () {
  const desktop = document.getElementById("desktop");
  const listaIcones = document.getElementById("icones");
  const janela = document.getElementById("janela");
  const janelaTitulo = document.getElementById("janelaTitulo");
  const janelaConteudo = document.getElementById("janelaConteudo");
  const btnFechar = document.getElementById("btnFecharJanela");
  const btnInicio = document.getElementById("btnInicio");
  const relogio = document.getElementById("relogio");

  let ultimoIcone = null;

  /* ---------- Ícones ---------- */

  function montarIcones() {
    listaIcones.replaceChildren();

    window.APPS.forEach((app) => {
      const item = document.createElement("li");
      const botao = document.createElement("button");
      botao.className = "icone" + (app.destaque ? " icone--destaque" : "");
      botao.dataset.app = app.id;
      botao.innerHTML = `
        <span class="icone__figura" aria-hidden="true">
          <svg viewBox="0 0 24 24">${window.ICONES[app.icone] || ""}</svg>
        </span>
        <span class="icone__nome"></span>
      `;
      botao.querySelector(".icone__nome").textContent = app.nome;
      botao.addEventListener("click", () => abrirApp(app.id, botao));
      item.appendChild(botao);
      listaIcones.appendChild(item);
    });
  }

  /* ---------- Janela ---------- */

  function abrirApp(id, origem) {
    const app = window.APPS.find((a) => a.id === id);
    if (!app) return;

    ultimoIcone = origem || null;
    janelaTitulo.textContent = app.nome;
    janela.classList.toggle("janela--larga", !!app.larga);
    if (app.abrir) app.abrir(janelaConteudo);   // conteúdo montado por função (ex.: galeria de projetos)
    else janelaConteudo.innerHTML = app.conteudo;

    // reinicia a animação de abrir
    janela.hidden = true;
    void janela.offsetWidth;
    janela.hidden = false;
    btnFechar.focus({ preventScroll: true });
  }

  function fecharJanela() {
    if (janela.hidden) return false;
    janela.hidden = true;
    if (ultimoIcone) ultimoIcone.focus({ preventScroll: true });
    return true;
  }

  btnFechar.addEventListener("click", fecharJanela);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || desktop.hidden) return;
    if (!fecharJanela() && window.Mesa.estaCheia()) window.Mesa.telaCheia(false);
  });

  /* ---------- Barra de tarefas ---------- */

  function atualizarRelogio() {
    relogio.textContent = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  btnInicio.addEventListener("click", () => {
    fecharJanela();
    try {
      sessionStorage.removeItem("aberturaVista");
    } catch (e) {
      /* ignora */
    }
    window.Abertura.reiniciar();
  });

  /* ---------- Mostrar ---------- */

  function mostrar() {
    desktop.hidden = false;
    const primeiro = listaIcones.querySelector(".icone");
    if (primeiro) primeiro.focus({ preventScroll: true });
  }

  montarIcones();
  atualizarRelogio();
  setInterval(atualizarRelogio, 15000);

  return { mostrar, abrirApp };
})();
