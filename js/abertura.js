/*
  ABERTURA (dentro do monitor)
  ----------------------------
  Sequência: tela desligada → ligando → login → boas-vindas → área de trabalho.
  - O botão "Pular" vai direto para a área de trabalho.
  - Quem já viu a abertura nesta visita pula direto (sessionStorage).
  - Para quem desativou animações no sistema, os tempos ficam bem curtos.
  - No celular, ao ligar, o monitor abre em tela cheia.
*/
window.Abertura = (function () {
  // A capa já dá as boas-vindas em voz; aqui é a "entrada" no sistema
  const TITULO = "Acesso liberado!";
  const SUBTITULO = "Interaja com a tela para me conhecer um pouco.";

  // Linhas que aparecem enquanto o sistema "liga"
  const BOOT = [
    "> carregando projetos ........ ok",
    "> carregando jogos ........... ok",
    "> conectando café ............ ok",
    "> acordando a Bella .......... ok"
  ];

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const t = (ms) => (reduzirMovimento ? Math.min(ms, 150) : ms); // encurta os tempos se preciso

  const abertura = document.getElementById("abertura");
  const etapas = {
    desligada: document.getElementById("etapaDesligada"),
    ligando: document.getElementById("etapaLigando"),
    login: document.getElementById("etapaLogin"),
    boasVindas: document.getElementById("etapaBoasVindas")
  };
  const btnLigar = document.getElementById("btnLigar");
  const btnPular = document.getElementById("btnPular");
  const boot = document.getElementById("boot");
  const pontosSenha = document.getElementById("pontosSenha");
  const statusLogin = document.getElementById("statusLogin");
  const textoTitulo = document.getElementById("textoTitulo");
  const textoSub = document.getElementById("textoSub");

  let cancelado = false;
  let concluida = false;

  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, t(ms)));

  function mostrarEtapa(nome) {
    Object.entries(etapas).forEach(([chave, el]) => {
      const ativa = chave === nome;
      el.classList.toggle("ativa", ativa);
      el.setAttribute("aria-hidden", String(!ativa));
    });
  }

  async function digitar(elemento, texto, velocidade) {
    elemento.classList.add("digitando");
    for (const letra of texto) {
      if (cancelado) return;
      elemento.textContent += letra;
      await esperar(velocidade);
    }
    elemento.classList.remove("digitando");
  }

  async function rodar() {
    abertura.classList.add("ligou");
    btnLigar.disabled = true;
    window.Mesa.ligado(true);
    if (window.Mesa.ehCelular()) window.Mesa.telaCheia(true);

    // 2. Ligando, com as linhas de boot aparecendo
    mostrarEtapa("ligando");
    await esperar(250);
    for (const linha of BOOT) {
      if (cancelado) return;
      const li = document.createElement("li");
      li.textContent = linha;
      boot.appendChild(li);
      await esperar(300);
    }
    await esperar(200);
    if (cancelado) return;

    // 3. Login: a senha "se digita" sozinha
    mostrarEtapa("login");
    await esperar(400);
    for (let i = 0; i < 8; i++) {
      if (cancelado) return;
      pontosSenha.textContent += "•";
      await esperar(70);
    }
    statusLogin.classList.add("visivel");
    await esperar(1000);
    if (cancelado) return;

    // 4. Boas-vindas digitadas
    mostrarEtapa("boasVindas");
    await esperar(300);
    await digitar(textoTitulo, TITULO, 45);
    await esperar(150);
    await digitar(textoSub, SUBTITULO, 25);
    await esperar(900);
    if (cancelado) return;

    concluir();
  }

  function concluir() {
    if (concluida) return;
    concluida = true;
    cancelado = true;
    window.Mesa.ligado(true);
    try {
      sessionStorage.setItem("aberturaVista", "1");
    } catch (e) {
      /* alguns navegadores bloqueiam; sem problema */
    }
    abertura.classList.add("saindo");
    window.Desktop.mostrar();
    setTimeout(() => (abertura.hidden = true), 600);
  }

  /* Reinicia a abertura (botão da barra de tarefas) */
  function reiniciar() {
    cancelado = false;
    concluida = false;
    boot.replaceChildren();
    pontosSenha.textContent = "";
    textoTitulo.textContent = "";
    textoSub.textContent = "";
    statusLogin.classList.remove("visivel");
    abertura.classList.remove("ligou", "saindo");
    btnLigar.disabled = false;
    abertura.hidden = false;
    window.Mesa.ligado(false);
    mostrarEtapa("desligada");
    btnLigar.focus({ preventScroll: true });
  }

  btnLigar.addEventListener("click", rodar);
  btnPular.addEventListener("click", concluir);

  // Atalho: Esc pula a abertura (só depois que o computador foi ligado)
  document.addEventListener("keydown", (e) => {
    if (abertura.hidden || concluida || !btnLigar.disabled) return;
    if (e.key === "Escape") concluir();
  });

  // Já viu nesta visita? O monitor já abre na área de trabalho
  let jaViu = false;
  try {
    jaViu = sessionStorage.getItem("aberturaVista") === "1";
  } catch (e) {
    /* ignora */
  }

  if (jaViu) {
    document.addEventListener("DOMContentLoaded", concluir);
  }
  // (não damos foco no botão ao carregar: isso faria a página rolar direto até o monitor)

  return { reiniciar };
})();
