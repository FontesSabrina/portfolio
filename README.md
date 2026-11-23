# Sabrina Dev | Portfólio

Portfólio em duas partes, feito com **HTML, CSS e JavaScript puro**, no estilo neon/cyberpunk:

1. **Capa animada (16:4):** a Sabrina levanta o óculos, sorri e fala com o próprio áudio. A Bella dorme na cama e acorda.
2. **Mesa com o monitor:** ao descer, aparece o computador do quarto. Dentro do monitor roda o "sistema" do portfólio, com ícones, janelas e barra de tarefas.

## Como abrir

Dê dois cliques no `index.html`. Não precisa de servidor nem de instalar nada.
(As fontes Orbitron e Share Tech Mono vêm do Google Fonts; sem internet, o navegador usa fontes parecidas.)

## O que já funciona

**Capa**
- Tela "[ CLIQUE PARA INICIAR ] 🔊" (os navegadores só tocam som depois de um clique).
- Poses levantando o óculos, piscadas, sorriso com covinha, boca sincronizada com o volume da voz e legenda digitando.
- A Bella: dorme com "zzz", abre os olhos, levanta a cabeça quando a fala começa.
- Parallax com o mouse, glitch, HUD e seta "↓ DESÇA", que leva até a mesa.

**Monitor**
1. **Tela desligada** com o botão de ligar brilhando.
2. **Ligando:** logo "SABRINA//DEV", barra de carregamento e linhas de boot.
3. **Login:** avatar, senha se preenchendo sozinha e "logando...".
4. **Boas-vindas** digitadas letra por letra.
5. **Área de trabalho** synthwave (sol e chão quadriculado andando), ícones neon, janelas e barra de tarefas com relógio.

- **Pular** (ou Esc) vai direto para a área de trabalho.
- Se a pessoa recarregar a página, o monitor já abre ligado.
- Clicar em "SABRINA//DEV" na barra de tarefas desliga o monitor e mostra a abertura de novo.
- **⛶** na barra de tarefas deixa o monitor em tela cheia (Esc sai).

**Projetos (8, tirados do GitHub)**
- Galeria com filtros: Todos, Jogos, Web, Mobile e Dados & mapas.
- Cada card abre o detalhe com carrossel de imagens, descrição, destaques, tecnologias e links (jogar / GitHub).
- Os ícones **Jogos**, **Web** e **Apps** abrem a mesma galeria, já filtrada.
- Projetos sem imagem (Mario Kart.JS e Desafio Dimensa) aparecem como uma tela de terminal.
- No celular, o monitor fica "em pé" e, ao ligar, já abre em tela cheia.

## Estrutura

```
portfolio/
├── index.html
├── css/
│   ├── base.css         cores e reset
│   ├── capa.css         capa animada
│   ├── mesa.css         fundo da mesa, monitor e tela cheia
│   ├── abertura.css     tela desligada, ligando, login, boas-vindas
│   ├── desktop.css      papel de parede, ícones, janela, barra de tarefas
│   └── projetos.css     galeria de projetos (cards, filtros, carrossel)
├── js/
│   ├── capa.js          sequência da capa, fala e Bella
│   ├── projetos.js      LISTA DE PROJETOS (edite aqui!) e a galeria
│   ├── apps.js          LISTA DE APPS E CONTEÚDOS (edite aqui!)
│   ├── mesa.js          monitor ligado e tela cheia
│   ├── abertura.js      sequência da abertura do monitor
│   └── desktop.js       ícones e janelas
└── assets/
    ├── capa/            poses, bocas, olhos, quarto, Bella e o áudio fala.mp3
    ├── projetos/        imagens de cada projeto (uma pasta por projeto)
    └── img/
        ├── avatar.webp  rosto da personagem (login e barra de tarefas)
        └── mesa.webp    a mesa do quarto (fundo da parte do monitor)
```

## Como mudar as coisas

- **Apps e conteúdos das janelas:** `js/apps.js`.
- **Projetos:** `js/projetos.js`. Para adicionar um, copie um bloco, mude os textos e coloque as imagens em `assets/projetos/nome-do-projeto/`.
- **Textos do monitor:** topo do `js/abertura.js` (`TITULO`, `SUBTITULO` e as linhas de `BOOT`).
- **Frase da capa e ordem das poses:** topo do `js/capa.js` (`FRASES`, `ORDEM_POSES`).
- **Cores:** topo do `css/base.css`.
- **Tamanho e posição da Bella:** `.cachorra` no `css/capa.css` (`left`, `top`, `width`).
- **Papel de parede com imagem:** no topo do `css/desktop.css`, troque o valor de `--papel-de-parede` por
  `url("../assets/img/wallpaper.webp") center / cover` e coloque o arquivo em `assets/img/`.
- **Trocar o áudio da capa:** o volume da voz fica salvo em `VOLUME`, no `js/capa.js`. Se trocar o MP3, peça para gerar de novo.
