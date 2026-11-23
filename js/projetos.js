/*
  PROJETOS
  --------
  Lista dos projetos (tirados do GitHub) e a galeria que aparece na janela "Projetos".
  Para adicionar um projeto, copie um bloco de PROJETOS e mude:
  - id: nome único, sem espaço
  - titulo, resumo (1 linha no card) e descricao (texto do detalhe)
  - categorias: "jogos", "web", "mobile" e/ou "dados" (definem os filtros)
  - tecnologias: lista de etiquetas
  - destaques: lista de pontos fortes (opcional)
  - imagens: caminhos das imagens (a primeira é a principal); ou "terminal" para um projeto sem imagem
  - links: botões (texto e endereço)
*/
window.PROJETOS = [
  {
    id: "vila-lypia",
    titulo: "Vila Lypia",
    resumo: "Jogo narrativo e educativo para crianças, com foco em acessibilidade.",
    categorias: ["jogos"],
    capa: "assets/projetos/vila-lypia/thumb.webp",
    imagens: [
      "assets/projetos/vila-lypia/capa.webp",
      "assets/projetos/vila-lypia/vila.webp",
      "assets/projetos/vila-lypia/bella.webp",
      "assets/projetos/vila-lypia/ipe.webp",
      "assets/projetos/vila-lypia/loja.webp",
      "assets/projetos/vila-lypia/mapa.webp"
    ],
    descricao: `Jogo narrativo para crianças de 7 a 12 anos, pensado também para crianças autistas ou com
      sensibilidade sensorial. A fada <b>Bella</b> e o jogador percorrem a vila, conversam com os moradores e
      reúnem os ingredientes e presentes de uma festa surpresa para a prefeita <b>Anne</b>.`,
    destaques: [
      "Minigames, escolhas de diálogo e três finais diferentes",
      "Menu de acessibilidade: sons suaves, sem clarões, letras maiores e velocidade do texto",
      "Vozes em português",
      "Versão para navegador no itch.io e versão para Windows"
    ],
    tecnologias: ["Godot 4.4", "GDScript", "Dialogic 2"],
    links: [
      { texto: "▶ Jogar no navegador", url: "https://xxsabrinaxx.itch.io/vila-lypia" },
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/Vila-Lypia" }
    ]
  },
  {
    id: "ctrl-alt-escape",
    titulo: "Ctrl + Alt + Escape",
    resumo: "Pegue cafés, desvie das tarefas e fuja do chefe!",
    categorias: ["jogos"],
    capa: "assets/projetos/ctrl-alt-escape/thumb.webp",
    capaTopo: true,
    imagens: [
      "assets/projetos/ctrl-alt-escape/gameplay.gif",
      "assets/projetos/ctrl-alt-escape/menu.webp",
      "assets/projetos/ctrl-alt-escape/chefe.webp",
      "assets/projetos/ctrl-alt-escape/ranking.webp"
    ],
    descricao: `Jogo 2D em pixel art sobre a correria do escritório. O funcionário anda sozinho e cada clique muda
      a direção dele: o objetivo é pegar o máximo de cafés desviando das pastas, das horas extras e do telefone,
      sem encostar nas bordas. E de vez em quando o chefe aparece e vem atrás de você.`,
    destaques: [
      "Funciona no computador e no celular, direto no navegador",
      "Fases que aceleram e o chefe que persegue o jogador",
      "Ranking com os melhores resultados"
    ],
    tecnologias: ["Godot 4.4", "GDScript", "Pixel art"],
    links: [
      { texto: "▶ Jogar no navegador", url: "https://fontessabrina.github.io/ctrl-alt-escape/" },
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/ctrl-alt-escape" }
    ]
  },
  {
    id: "piratas-da-galaxia",
    titulo: "Piratas da Galáxia",
    resumo: "RPG de terminal em C# para praticar orientação a objetos.",
    categorias: ["jogos"],
    capa: "assets/projetos/piratas-da-galaxia/thumb.webp",
    capaTopo: true,
    imagens: [
      "assets/projetos/piratas-da-galaxia/capa.webp",
      "assets/projetos/piratas-da-galaxia/ivy.webp",
      "assets/projetos/piratas-da-galaxia/habilidades.webp",
      "assets/projetos/piratas-da-galaxia/mapa.webp"
    ],
    descricao: `RPG no terminal: o jogador escolhe um entre quatro heróis (Cecília Cerulius, Ivy Skye, Soren e Nero)
      e enfrenta seis rodadas decididas nos dados. O projeto foi feito para colocar em prática os pilares da
      Programação Orientada a Objetos.`,
    destaques: [
      "Abstração, herança e polimorfismo aplicados nas classes dos heróis",
      "Cada tipo de herói tem atributos e comportamentos próprios",
      "Capa, personagens e mapa ilustrados"
    ],
    tecnologias: ["C#", ".NET", "POO"],
    links: [
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/Piratas-da-Galaxia" }
    ]
  },
  {
    id: "mario-kart-terminal",
    titulo: "Mario Kart.JS",
    resumo: "Simulador de corrida no terminal, em Node.js.",
    categorias: ["jogos"],
    terminal: [
      "🏁🚨 Corrida entre Mario e Bowser começando...",
      "",
      "🏁 Rodada 3   Bloco: CURVA",
      "🌪️ Pista CURVA: Manobrabilidade em ação!",
      "Mario 🎲 Rolou um dado de Manobrabilidade 6 + 3 = 9",
      "Bowser 🎲 Rolou um dado de Manobrabilidade 3 + 2 = 5",
      "🎉 Mario venceu a curva e marcou um ponto!",
      "",
      "💥 CONFRONTO! Poder à prova!",
      "Mario 🎲 Rolou um dado de Poder 5 + 3 = 8",
      "Bowser 🎲 Rolou um dado de Poder 3 + 5 = 8",
      "Confronto empatado! Ninguém pontuou.",
      "",
      "🏁 Final da Corrida!",
      "🏆 Mario venceu a corrida!"
    ],
    descricao: `Desafio de projeto da DIO: um simulador de corrida que roda no terminal. Em cada rodada o programa
      sorteia um bloco da pista (reta, curva ou confronto) e os corredores rolam um dado somado ao atributo que
      aquele bloco testa: velocidade, manobrabilidade ou poder.`,
    destaques: [
      "Sorteio dos blocos da pista e dos dados",
      "Regras novas: toda curva e todo confronto têm vencedor ou empate",
      "Itens que mudam os atributos durante a corrida"
    ],
    tecnologias: ["JavaScript", "Node.js"],
    links: [
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/Mario-Kart-Terminal" }
    ]
  },
  {
    id: "auria",
    titulo: "Auria",
    resumo: "Gestão de manutenção predial: app Flutter + API ASP.NET Core.",
    categorias: ["mobile", "web"],
    capa: "assets/projetos/auria/thumb.webp",
    imagens: [
      "assets/projetos/auria/demo.gif",
      "assets/projetos/auria/painel.webp",
      "assets/projetos/auria/login.webp",
      "assets/projetos/auria/estoque.webp",
      "assets/projetos/auria/indicadores.webp",
      "assets/projetos/auria/acessibilidade.webp"
    ],
    descricao: `Trabalho de Engenharia de Software (IF Sudeste MG, Campus Muriaé). O sistema Aura, que antes
      funcionava só no app Flutter com dados locais, virou cliente-servidor: o app passou a consumir a
      <b>AuriaAPI</b>, uma API REST responsável pelas regras de negócio, pelo banco, pela autenticação e pelo cache.`,
    destaques: [
      "Fluxo completo: o solicitante abre o chamado, o admin aprova e designa o técnico, o técnico conclui a ordem de serviço",
      "Painel do administrador com estoque, indicadores e manutenções preventivas",
      "Autenticação com JWT e opções de acessibilidade"
    ],
    tecnologias: ["Flutter", "Dart", "ASP.NET Core 9", "C#", "EF Core", "MySQL", "JWT"],
    links: [
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/ApiAuria" }
    ]
  },
  {
    id: "farol",
    titulo: "Farol · Maratona Energisa",
    resumo: "Quais comunidades ficam sem luz num desligamento programado?",
    categorias: ["web", "dados"],
    capa: "assets/projetos/farol/thumb.webp",
    imagens: [
      "assets/projetos/farol/mapa.webp",
      "assets/projetos/farol/inicio.webp"
    ],
    descricao: `Desafio 3 da Maratona Energisa. O sistema identifica automaticamente as comunidades afetadas por um
      desligamento programado, para que o aviso no rádio cite as comunidades em vez de listar sítio por sítio.
      O teste foi feito em Leopoldina/MG, com dados reais do Censo IBGE 2022 (a rede elétrica é fictícia).`,
    destaques: [
      "Comunidade correta na zona rural: de 56,1% (só o cadastro) para 90,9%",
      "93,2% das comunidades atingidas entram no aviso",
      "Aviso no rádio cai de 44 s para 14 s, em média",
      "Mapa interativo para simular cada chave"
    ],
    tecnologias: ["Python", "Dados do IBGE", "Leaflet", "Mapas"],
    links: [
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/Maratona-Energisa" }
    ]
  },
  {
    id: "dimensa",
    titulo: "Gestão de Esteira Ativa",
    resumo: "Desafio Dimensa: 50 mil registros financeiros em Laravel.",
    categorias: ["web"],
    terminal: [
      "$ php artisan serve",
      "",
      "▸ Importação .xlsx / .csv",
      "  50.000 registros lidos em blocos (chunks)",
      "",
      "▸ Valor Presente (VP)",
      "  fórmulas de atraso e de adiantamento",
      "",
      "▸ Status da proposta",
      "  APROVADA → ASSINATURA CONCLUÍDA → PAGO AO CLIENTE",
      "",
      "▸ Logs de auditoria em cada mudança de status"
    ],
    descricao: `Sistema feito no processo seletivo para Analista I de Desenvolvimento de Software na Dimensa.
      A aplicação processa um alto volume de dados (50 mil registros) e cuida da gestão de operações financeiras.`,
    destaques: [
      "Importação de 50 mil registros com leitura em blocos",
      "Cálculo de Valor Presente para atraso e adiantamento",
      "Regras de status e logs de auditoria para rastrear cada mudança",
      "Paginação e consultas otimizadas"
    ],
    tecnologias: ["PHP 8", "Laravel 12", "MySQL", "Blade", "Tailwind CSS", "Laravel Excel"],
    links: [
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/desafio-dimensa-esteira" }
    ]
  },
  {
    id: "tcc",
    titulo: "Vegetação urbana de Muriaé",
    resumo: "TCC: área verde por habitante com imagem de satélite CBERS-4A.",
    categorias: ["dados"],
    capa: "assets/projetos/tcc/thumb.webp",
    imagens: [
      "assets/projetos/tcc/cobertura.webp",
      "assets/projetos/tcc/falsa-cor.webp",
      "assets/projetos/tcc/cor-verdadeira.webp",
      "assets/projetos/tcc/cruzamento.webp"
    ],
    descricao: `Meu TCC em Gestão da Tecnologia da Informação (IF Sudeste MG, Campus Muriaé): a classificação da
      cobertura vegetal do perímetro urbano de Muriaé-MG com imagem do satélite CBERS-4A e o cálculo do
      <b>IDVU</b>, que mede a área verde por habitante.`,
    destaques: [
      "Classificação supervisionada por Máxima Verossimilhança, em Python",
      "Acurácia global de 80,61% (kappa 0,727), validada com 200 pontos",
      "População por setor censitário (Censo 2022) pelo método dasimétrico",
      "Comparação com as referências da OMS: 12 m²/hab (mínimo) e 36 m²/hab (ideal)"
    ],
    tecnologias: ["QGIS", "Python", "NumPy", "Sensoriamento remoto"],
    links: [
      { texto: "Código no GitHub", url: "https://github.com/FontesSabrina/Vegetacao-Urbana-Muriae-CBERS4A" }
    ]
  }
];

window.Projetos = (function () {
  const FILTROS = [
    { id: "todos", nome: "Todos" },
    { id: "jogos", nome: "Jogos" },
    { id: "web", nome: "Web" },
    { id: "mobile", nome: "Mobile" },
    { id: "dados", nome: "Dados & mapas" }
  ];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function terminalHTML(linhas, pequeno) {
    return `<div class="terminal${pequeno ? " terminal--mini" : ""}" aria-hidden="${pequeno ? "true" : "false"}">
      <div class="terminal__topo"><i></i><i></i><i></i></div>
      <pre>${linhas.map(esc).join("\n")}</pre>
    </div>`;
  }

  /* ---------- Lista com filtros ---------- */
  function lista(container, filtro) {
    const itens = window.PROJETOS.filter((p) => filtro === "todos" || p.categorias.includes(filtro));
    container.innerHTML = `
      <div class="projetos">
        <div class="filtros" role="tablist" aria-label="Filtrar projetos">
          ${FILTROS.map((f) => `<button role="tab" class="filtro${f.id === filtro ? " ativo" : ""}" aria-selected="${f.id === filtro}" data-filtro="${f.id}">${f.nome}</button>`).join("")}
        </div>
        <ul class="cards">
          ${itens.map((p) => `
            <li>
              <button class="card" data-projeto="${p.id}">
                <span class="card__img">
                  ${p.terminal ? terminalHTML(p.terminal.slice(0, 7), true)
                    : `<img src="${p.capa}" alt="" loading="lazy"${p.capaTopo ? ' class="topo"' : ""}>`}
                </span>
                <span class="card__texto">
                  <strong>${esc(p.titulo)}</strong>
                  <small>${esc(p.resumo)}</small>
                  <span class="etiquetas">${p.tecnologias.slice(0, 3).map((t) => `<em>${esc(t)}</em>`).join("")}</span>
                </span>
              </button>
            </li>`).join("")}
        </ul>
      </div>`;

    container.querySelectorAll("[data-filtro]").forEach((b) =>
      b.addEventListener("click", () => lista(container, b.dataset.filtro)));
    container.querySelectorAll("[data-projeto]").forEach((b) =>
      b.addEventListener("click", () => detalhe(container, b.dataset.projeto, filtro)));
    container.scrollTop = 0;
  }

  /* ---------- Detalhe com galeria ---------- */
  function detalhe(container, id, filtroDeVolta) {
    const p = window.PROJETOS.find((x) => x.id === id);
    if (!p) return;
    const imgs = p.imagens || [];
    container.innerHTML = `
      <div class="projeto">
        <button class="voltar" id="btnVoltar">← todos os projetos</button>
        <div class="galeria">
          ${imgs.length ? `
            <div class="galeria__palco">
              <img id="galeriaImg" src="${imgs[0]}" alt="${esc(p.titulo)}: imagem 1 de ${imgs.length}">
              ${imgs.length > 1 ? `
                <button class="galeria__seta galeria__seta--esq" id="galAnt" aria-label="Imagem anterior">‹</button>
                <button class="galeria__seta galeria__seta--dir" id="galProx" aria-label="Próxima imagem">›</button>` : ""}
            </div>
            ${imgs.length > 1 ? `<div class="galeria__minis">
              ${imgs.map((src, i) => `<button class="mini${i === 0 ? " ativo" : ""}" data-i="${i}" aria-label="Ver imagem ${i + 1}">
                <img src="${src}" alt="" loading="lazy"></button>`).join("")}
            </div>` : ""}`
          : terminalHTML(p.terminal || [], false)}
        </div>
        <h2>${esc(p.titulo)}</h2>
        <p>${p.descricao}</p>
        ${p.destaques ? `<ul class="destaques">${p.destaques.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
        <p class="etiquetas">${p.tecnologias.map((t) => `<em>${esc(t)}</em>`).join("")}</p>
        <p class="links">${p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.texto)}</a>`).join("")}</p>
      </div>`;

    container.querySelector("#btnVoltar").addEventListener("click", () => lista(container, filtroDeVolta || "todos"));

    if (imgs.length > 1) {
      let atual = 0;
      const img = container.querySelector("#galeriaImg");
      const minis = container.querySelectorAll(".mini");
      const mostrar = (i) => {
        atual = (i + imgs.length) % imgs.length;
        img.src = imgs[atual];
        img.alt = `${p.titulo}: imagem ${atual + 1} de ${imgs.length}`;
        minis.forEach((m, k) => m.classList.toggle("ativo", k === atual));
      };
      container.querySelector("#galAnt").addEventListener("click", () => mostrar(atual - 1));
      container.querySelector("#galProx").addEventListener("click", () => mostrar(atual + 1));
      minis.forEach((m) => m.addEventListener("click", () => mostrar(Number(m.dataset.i))));
    }
    container.scrollTop = 0;
  }

  return { lista, detalhe };
})();
