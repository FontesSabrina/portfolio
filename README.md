<h1 align="center">SABRINA // DEV — Portfólio</h1>

<p align="center">
  Portfólio interativo em estilo <b>neon / cyberpunk</b>, feito com <b>HTML, CSS e JavaScript puro</b>, sem frameworks e sem bibliotecas.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

<p align="center">
  <a href="https://fontessabrina.github.io/portfolio/"><b>🔗 Acesse o portfólio online</b></a>
</p>

---

## 💡 Sobre o projeto

Este é o meu portfólio pessoal. Em vez de uma página comum com uma lista de projetos, criei uma **experiência interativa**: o visitante entra no meu quarto, liga o computador e navega pelos meus projetos como se estivesse usando um sistema operacional.

O objetivo foi praticar e mostrar, num projeto real, **manipulação do DOM, animações em CSS, controle de estados e organização de código em JavaScript puro**.

## ✨ Funcionalidades

### 🎬 Capa animada (16:4)
- Personagem animada que levanta o visor, sorri e dá as boas-vindas **com a minha voz gravada**, com movimento sincronizado de boca e olhos.
- A Bella, minha cachorrinha, acorda durante a cena.
- Efeito de **parallax** que acompanha o mouse e efeitos de *glitch* no estilo neon.
- Texto digitado em tempo real (efeito *typewriter*).

### 🖥️ Computador interativo
- Tela desligada com **botão de ligar**.
- Sequência de **boot** ("SABRINA//DEV — carregando projetos… ok").
- **Tela de login** animada e mensagem de "Acesso liberado!".
- **Área de trabalho** synthwave com ícones neon, janelas que abrem e fecham e barra de tarefas.
- Opção de **pular a introdução**, e o monitor **lembra o estado** ao recarregar a página.

### 📂 Galeria de projetos
- **8 projetos** do meu GitHub, com **filtro por categoria**: jogos, web, mobile e dados/mapas.
- Cada projeto tem uma tela de detalhes com **carrossel de imagens**, descrição, tecnologias usadas e links.

## 🛠️ Tecnologias e conceitos aplicados

| Área | O que foi usado |
|---|---|
| **HTML5** | Estrutura semântica e elementos de áudio |
| **CSS3** | Animações e *keyframes*, transições, Flexbox, Grid, variáveis CSS, efeitos neon e *glitch* |
| **JavaScript** | Manipulação do DOM, eventos de mouse e teclado, controle de estados, *timers*, áudio, `localStorage` e código separado em módulos por tela |
| **Assets** | Imagens otimizadas em **WebP** para carregar mais rápido |
| **Deploy** | GitHub Pages |

## 📁 Estrutura de pastas

```
portfolio/
├── index.html          # Página principal
├── css/
│   ├── base.css        # Cores, fontes e estilos gerais
│   ├── capa.css        # Capa animada
│   ├── mesa.css        # Mesa e monitor
│   ├── abertura.css    # Boot e login
│   ├── desktop.css     # Área de trabalho e janelas
│   └── projetos.css    # Galeria de projetos
├── js/
│   ├── capa.js         # Animação da personagem, falas e poses
│   ├── mesa.js         # Interação com a mesa e o monitor
│   ├── abertura.js     # Textos do boot e do login
│   ├── desktop.js      # Janelas e barra de tarefas
│   ├── apps.js         # Conteúdo das janelas
│   └── projetos.js     # Lista de projetos da galeria
└── assets/
    ├── capa/           # Poses, boca, olhos, cachorra e áudio
    ├── img/            # Avatar e mesa
    └── projetos/       # Imagens de cada projeto
```

## 🚀 Como executar

Não precisa instalar nada nem rodar servidor:

1. Clone o repositório:
   ```bash
   git clone https://github.com/FontesSabrina/portfolio.git
   ```
2. Abra o arquivo `index.html` no navegador.

> As fontes são carregadas do Google Fonts. Sem internet, o site usa fontes alternativas.

## ✏️ Como personalizar

| Quero mudar… | Arquivo |
|---|---|
| Projetos da galeria | `js/projetos.js` |
| Conteúdo das janelas | `js/apps.js` |
| Textos do boot e do login | `js/abertura.js` |
| Falas e poses da capa | `js/capa.js` |
| Cores do tema | `css/base.css` |

## 👩‍💻 Autora

**Sabrina Caetano Fontes**, estudante de Gestão da Tecnologia da Informação no IF Sudeste MG (Campus Muriaé), com foco em desenvolvimento Front-end.

<p>
  <a href="https://www.linkedin.com/in/sabrina-fontes-279957206/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://github.com/FontesSabrina"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
  <a href="mailto:sabrinacfontes@gmail.com"><img src="https://img.shields.io/badge/E--mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail"></a>
</p>
