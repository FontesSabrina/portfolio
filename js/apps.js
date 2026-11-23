/*
  APPS DA ÁREA DE TRABALHO
  ------------------------
  Cada item vira um ícone. Para adicionar um app, copie um bloco e mude:
  - id: nome único, sem espaço
  - nome: o texto embaixo do ícone
  - icone: um dos desenhos de ICONES (abaixo)
  - destaque: true deixa o ícone rosa (use em 1 ou 2, no máximo)
  - conteudo: o HTML que aparece dentro da janela
  - abrir: (opcional) função que monta o conteúdo da janela, como a galeria de projetos
  - larga: true deixa a janela mais larga

  Os projetos ficam em js/projetos.js. "Jogos", "Web" e "Apps" abrem a mesma galeria, já filtrada.
*/
window.ICONES = {
  pasta: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  controle: '<path d="M6 9h4M8 7v4"/><circle cx="15.5" cy="9.5" r="1"/><circle cx="18" cy="12" r="1"/><path d="M7 5h10a5 5 0 0 1 4.6 7l-1.3 3.2A2.5 2.5 0 0 1 16 16l-1.5-2h-5L8 16a2.5 2.5 0 0 1-4.3-.8L2.4 12A5 5 0 0 1 7 5z"/>',
  web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  celular: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  pessoa: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  certificado: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><circle cx="12" cy="17" r="2.5"/><path d="M10.5 19l-1 3 2.5-1 2.5 1-1-3M7 8h10M7 11h6"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  codigo: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>'
};

window.APPS = [
  {
    id: "sobre",
    nome: "Sobre mim",
    icone: "pessoa",
    destaque: true,
    conteudo: `
      <h2>Oi, eu sou a Sabrina 👋</h2>
      <p>Desenvolvedora web, mobile e de jogos, estudante de Gestão da Tecnologia da Informação.</p>
      <p>Texto de exemplo: aqui entra um parágrafo curto sobre quem você é e o que você gosta de criar.</p>
      <span class="aviso-em-breve">em construção</span>
    `
  },
  {
    id: "projetos",
    nome: "Projetos",
    icone: "pasta",
    larga: true,
    abrir: (janela) => window.Projetos.lista(janela, "todos")
  },
  {
    id: "jogos",
    nome: "Jogos",
    icone: "controle",
    larga: true,
    abrir: (janela) => window.Projetos.lista(janela, "jogos")
  },
  {
    id: "web",
    nome: "Web",
    icone: "web",
    larga: true,
    abrir: (janela) => window.Projetos.lista(janela, "web")
  },
  {
    id: "mobile",
    nome: "Apps",
    icone: "celular",
    larga: true,
    abrir: (janela) => window.Projetos.lista(janela, "mobile")
  },
  {
    id: "habilidades",
    nome: "Habilidades",
    icone: "codigo",
    conteudo: `
      <h2>Habilidades</h2>
      <p>HTML, CSS, JavaScript, Flutter, ASP.NET Core, WordPress, Godot, QGIS.</p>
      <span class="aviso-em-breve">em construção</span>
    `
  },
  {
    id: "certificados",
    nome: "Certificados",
    icone: "certificado",
    conteudo: `
      <h2>Certificados</h2>
      <p>Galeria com os certificados, com setas para passar um por um.</p>
      <span class="aviso-em-breve">em construção</span>
    `
  },
  {
    id: "contato",
    nome: "Contato",
    icone: "email",
    destaque: true,
    conteudo: `
      <h2>Vamos conversar?</h2>
      <p>Aqui entram o WhatsApp, o e-mail, o LinkedIn e o GitHub.</p>
      <span class="aviso-em-breve">em construção</span>
    `
  }
];
