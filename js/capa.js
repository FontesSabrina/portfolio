/*
  CAPA ANIMADA
  ------------
  Ela levanta o óculos, sorri e fala com o seu áudio. A boca segue o volume da voz.
  A Bella dorme, acorda e levanta a cabeça quando a fala começa.
*/
(function () {
/* =====================================================================
   CONFIGURAÇÃO — o que você vai mexer
   ===================================================================== */

// Seu áudio. Se trocar o arquivo, gere de novo o VOLUME abaixo (ou use null para falar sem som)
const AUDIO_SRC = 'assets/capa/fala.mp3';

// Volume da sua voz a cada 20 ms (0 = silêncio, 1 = mais alto), calculado a partir do MP3.
// É isso que faz a boca abrir e fechar no ritmo da sua fala.
const VOLUME = [0.0, 0.0, 0.02, 0.11, 0.57, 1.0, 1.0, 1.0, 1.0, 0.67, 0.57, 0.71, 1.0, 1.0, 1.0, 1.0, 0.99, 1.0, 0.99, 0.89, 0.73, 0.57, 0.46, 0.35, 0.22, 0.11, 0.04, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.04, 0.07, 0.07, 0.07, 0.28, 0.65, 0.71, 0.53, 0.57, 0.9, 1.0, 1.0, 0.56, 0.16, 0.06, 0.09, 0.24, 0.45, 0.58, 0.63, 0.68, 0.71, 0.71, 0.66, 0.46, 0.2, 0.16, 0.23, 0.37, 0.66, 0.83, 0.77, 0.67, 0.64, 0.64, 0.67, 0.67, 0.58, 0.41, 0.22, 0.1, 0.06, 0.16, 0.43, 0.54, 0.32, 0.09, 0.01, 0.12, 0.43, 0.73, 0.87, 0.87, 0.78, 0.66, 0.49, 0.3, 0.17, 0.13, 0.18, 0.27, 0.33, 0.33, 0.3, 0.3, 0.32, 0.34, 0.33, 0.23, 0.08, 0.03, 0.13, 0.27, 0.27, 0.16, 0.07, 0.06, 0.17, 0.36, 0.47, 0.37, 0.22, 0.12, 0.05, 0.08, 0.27, 0.5, 0.58, 0.57, 0.56, 0.51, 0.33, 0.17, 0.29, 0.54, 0.53, 0.4, 0.47, 0.55, 0.46, 0.28, 0.12, 0.05, 0.05, 0.1, 0.29, 0.58, 0.76, 0.7, 0.46, 0.25, 0.26, 0.43, 0.51, 0.49, 0.46, 0.33, 0.16, 0.07, 0.09, 0.22, 0.38, 0.38, 0.26, 0.19, 0.25, 0.44, 0.56, 0.51, 0.4, 0.28, 0.15, 0.07, 0.06, 0.14, 0.32, 0.4, 0.33, 0.29, 0.31, 0.38, 0.52, 0.54, 0.46, 0.44, 0.45, 0.47, 0.48, 0.48, 0.48, 0.48, 0.48, 0.48, 0.43, 0.32, 0.25, 0.27, 0.41, 0.52, 0.43, 0.25, 0.18, 0.21, 0.24, 0.25, 0.25, 0.33, 0.46, 0.56, 0.6, 0.57, 0.51, 0.41, 0.27, 0.15, 0.11, 0.2, 0.32, 0.3, 0.19, 0.1, 0.04, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.09, 0.28, 0.59, 0.82, 0.8, 0.55, 0.25, 0.07, 0.08, 0.24, 0.46, 0.59, 0.67, 0.68, 0.59, 0.46, 0.36, 0.28, 0.2, 0.11, 0.03, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.01, 0.04, 0.07, 0.16, 0.51, 0.93, 0.8, 0.3, 0.09, 0.18, 0.36, 0.55, 0.62, 0.46, 0.21, 0.16, 0.35, 0.56, 0.55, 0.39, 0.27, 0.17, 0.06, 0.05, 0.17, 0.39, 0.73, 1.0, 1.0, 0.84, 0.59, 0.29, 0.14, 0.25, 0.41, 0.32, 0.12, 0.14, 0.39, 0.59, 0.51, 0.37, 0.47, 0.56, 0.49, 0.45, 0.51, 0.65, 0.66, 0.44, 0.24, 0.23, 0.43, 0.72, 0.71, 0.42, 0.23, 0.33, 0.57, 0.72, 0.71, 0.57, 0.43, 0.39, 0.39, 0.39, 0.4, 0.42, 0.45, 0.49, 0.53, 0.58, 0.54, 0.34, 0.11, 0.05, 0.23, 0.45, 0.39, 0.2, 0.09, 0.05, 0.05, 0.12, 0.22, 0.3, 0.24, 0.1, 0.04, 0.04, 0.04, 0.11, 0.28, 0.45, 0.54, 0.55, 0.5, 0.44, 0.38, 0.32, 0.27, 0.25, 0.26, 0.25, 0.18, 0.1, 0.05, 0.02, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
const VOLUME_FPS = 50;
const SILENCIO = 0.14;   // abaixo disso a boca fecha
const GRITO = 0.7;       // acima disso a boca abre bem (A)

// Ordem das poses ao levantar o óculos (teste também: ['pose1','pose3','pose2','pose4'])
const ORDEM_POSES = ['pose1', 'pose2', 'pose4'];

const FRASES = [
  'Bem-vindo ao meu portfólio.',
  'Se você entrou aqui é porque você quer descobrir um pouco mais sobre mim.',
  'Então, não perca tempo.',
  'Desça e conheça um pouco do que eu faço.'
];
// Frases em que ela fala sorrindo (usa a boca com covinha no lugar do "E")
const FRASES_SORRINDO = [0, 3];

const MS_POR_LETRA = 62;   // velocidade da fala sem áudio

/* =====================================================================
   ELEMENTOS
   ===================================================================== */
const $ = s => document.querySelector(s);
const poses  = {}; document.querySelectorAll('[data-pose]').forEach(i => poses[i.dataset.pose] = i);
const bocas  = {}; document.querySelectorAll('[data-boca]').forEach(i => bocas[i.dataset.boca] = i);
const olhos  = {}; document.querySelectorAll('[data-olho]').forEach(i => olhos[i.dataset.olho] = i);
const legenda = $('#legenda'), gWrap = $('#gWrap'), flash = $('#flash');
const espera = ms => new Promise(r => setTimeout(r, ms));

let poseAtual = 'pose1';
let rodando = false;

/* ---------- trocar de pose (crossfade rápido) ---------- */
function mostrarPose(nome){
  Object.values(poses).forEach(i => i.classList.toggle('on', i.dataset.pose === nome));
  poseAtual = nome;
  if (nome !== 'pose4') { setBoca(null); setOlho(null); }
}
function setBoca(v){ Object.entries(bocas).forEach(([k,i]) => i.classList.toggle('on', k === v)); }
function setOlho(v){ Object.entries(olhos).forEach(([k,i]) => i.classList.toggle('on', k === v)); }

/* ---------- cachorrinha ----------
   1 dormindo | 2 abrindo os olhos | 3 acordada, cabeça baixa | 4 e 5 cabeça levantada | 6 olhos fechados (piscar) */
const dogs = {}; document.querySelectorAll('[data-dog]').forEach(i => dogs[i.dataset.dog] = i);
let dogAtual = '1', dogTimer = null;
function setDog(n){
  n = String(n); dogAtual = n;
  Object.entries(dogs).forEach(([k,i]) => i.classList.toggle('on', k === n));
  $('#zzz').classList.toggle('on', n === '1');
}
function dogOlhando(liga){               // durante a fala ela alterna entre as duas poses de cabeça levantada
  clearTimeout(dogTimer);
  if (!liga) return;
  (function troca(){
    dogTimer = setTimeout(() => { setDog(dogAtual === '4' ? '5' : '4'); troca(); }, 1600 + Math.random()*1400);
  })();
}
(function dogPisca(){                    // pisca quando está acordada com a cabeça baixa
  setTimeout(async () => {
    if (dogAtual === '3'){ setDog(6); await espera(130); if (dogAtual === '6') setDog(3); }
    dogPisca();
  }, 1800 + Math.random()*2500);
})();

/* ---------- glitch ---------- */
function glitch(forte){
  gWrap.classList.remove('glitch'); void gWrap.offsetWidth; gWrap.classList.add('glitch');
  if (forte){ flash.animate([{opacity:.35},{opacity:0}], {duration:180}); }
}
gWrap.addEventListener('animationend', () => gWrap.classList.remove('glitch'));
(function glitchAleatorio(){
  setTimeout(() => { glitch(false); glitchAleatorio(); }, 3500 + Math.random()*4500);
})();

/* ---------- piscar (só quando a base é a pose 4) ---------- */
async function piscar(){
  if (poseAtual !== 'pose4') return;
  setOlho('meio'); await espera(45);
  setOlho('fechado'); await espera(75);
  setOlho('meio'); await espera(45);
  setOlho(null);
}
(function piscarAleatorio(){
  setTimeout(() => { piscar(); piscarAleatorio(); }, 2200 + Math.random()*3200);
})();

/* ---------- parallax com o mouse ---------- */
const quarto = $('#quarto'), frente = $('#frente'), pWrap = $('#pWrap'), hud = $('#hud'), intro = $('#intro');
let alvoX = 0, alvoY = 0, x = 0, y = 0;
$('#capa').addEventListener('pointermove', e => {
  const r = e.currentTarget.getBoundingClientRect();
  alvoX = (e.clientX - r.left) / r.width - .5;
  alvoY = (e.clientY - r.top) / r.height - .5;
});
$('#capa').addEventListener('pointerleave', () => { alvoX = 0; alvoY = 0; });
(function loopParallax(){
  x += (alvoX - x) * .06;  y += (alvoY - y) * .06;   // suaviza (igual ao "ease" do GSAP)
  quarto.style.transform = `translate(${x*-22}px, ${y*-12}px)`;   // fundo anda pouco e ao contrário
  frente.style.transform = quarto.style.transform;                  // a Bella anda junto com o quarto
  pWrap.style.transform  = `translate(${x*10}px, ${y*6}px)`;      // personagem anda um pouco
  hud.style.transform    = `translate(${x*26}px, ${y*14}px)`;     // HUD (mais "perto") anda mais
  intro.style.transform  = `translate(${x*16}px, ${y*8}px)`;
  requestAnimationFrame(loopParallax);
})();

/* ---------- binário correndo ---------- */
(function(){
  let s = ''; for (let i = 0; i < 160; i++) s += (Math.random() > .5 ? '1' : '0') + (i % 8 === 7 ? ' ' : '');
  $('#bin').textContent = s + s;
})();

/* =====================================================================
   FALA — transforma o texto numa "trilha" de bocas
   A/Á/Ã → A   E/I → E   O/U → O   M/B/P → M   espaço/pontuação → fechada
   ===================================================================== */
const MAPA = {a:'A',á:'A',à:'A',ã:'A',â:'A',e:'E',é:'E',ê:'E',i:'E',í:'E',o:'O',ó:'O',ô:'O',õ:'O',u:'O',ú:'O',m:'M',b:'M',p:'M'};
function montarTrilha(){
  const trilha = [], legendas = []; let t = 0;
  FRASES.forEach((frase, fi) => {
    const sorri = FRASES_SORRINDO.includes(fi);
    legendas.push({ t, texto: frase, ini: t });
    for (const ch of frase.toLowerCase()){
      let v = MAPA[ch], d = MS_POR_LETRA;
      if (!v){
        if (/[a-zç]/.test(ch)) { v = 'E'; d = MS_POR_LETRA * .75; }
        else if (ch === ',') { v = null; d = 220; }
        else if (/[.!?]/.test(ch)) { v = null; d = 480; }
        else { v = null; d = 35; }
      }
      if (sorri && v === 'E') v = 'S';
      if (!trilha.length || trilha[trilha.length-1].v !== v) trilha.push({ t, v });
      t += d;
    }
    legendas[legendas.length-1].fim = t;
  });
  return { trilha, legendas, total: t };
}

// tempo "falado" acumulado (ignora os silêncios), para encaixar o texto na sua voz
const FALADO = [];
(function(){ let acc = 0; for (const v of VOLUME){ FALADO.push(acc); if (v >= SILENCIO) acc += 1; } FALADO.push(acc); })();

let audio = null;
function prepararAudio(){                 // chamado no clique: libera o som no celular também
  if (!AUDIO_SRC || audio) return;
  audio = new Audio(AUDIO_SRC); audio.preload = 'auto';
  audio.muted = true;
  audio.play().then(() => { audio.pause(); audio.currentTime = 0; audio.muted = false; })
              .catch(() => { audio.muted = false; });
}

function vizemaNoTempo(trilha, t){
  for (let i = trilha.length - 1; i >= 0; i--) if (trilha[i].t <= t) return trilha[i].v;
  return null;
}

async function falar(){
  const { trilha, legendas, total } = montarTrilha();
  legenda.classList.add('on');

  let comSom = false;
  if (audio){
    audio.currentTime = 0;
    try { await audio.play(); comSom = true; } catch(e) { comSom = false; }
  }
  const totalFalado = FALADO[FALADO.length - 1] || 1;
  const inicio = performance.now();

  return new Promise(resolve => {
    function quadro(){
      let v, t;
      if (comSom){
        const f = Math.min(VOLUME.length - 1, Math.floor(audio.currentTime * VOLUME_FPS));
        const vol = VOLUME[f];
        t = FALADO[f] / totalFalado * total;          // posição no texto
        const dica = vizemaNoTempo(trilha, t);          // qual vogal "deveria" ser
        if (vol < SILENCIO) v = (dica === 'M') ? 'M' : null;
        else {
          v = dica || 'E';
          if (vol > GRITO && (v === 'E' || v === 'S')) v = 'A';
        }
      } else {
        t = performance.now() - inicio;
        v = vizemaNoTempo(trilha, t);
      }
      setBoca(v);

      // legenda digitando
      const l = legendas.find(l => t >= l.ini && t < l.fim) || legendas[legendas.length-1];
      const prog = Math.min(1, (t - l.ini) / Math.max(1, l.fim - l.ini - 300));
      legenda.textContent = l.texto.slice(0, Math.max(0, Math.ceil(l.texto.length * prog)));

      const acabou = comSom ? (audio.ended || audio.paused) : t >= total;
      if (acabou){ setBoca(null); resolve(); }
      else requestAnimationFrame(quadro);
    }
    requestAnimationFrame(quadro);
  });
}

/* =====================================================================
   SEQUÊNCIA PRINCIPAL
   ===================================================================== */
async function digitarTag(texto){
  const el = $('#tagTexto'); el.textContent = '';
  for (const c of texto){ el.textContent += c; await espera(28); }
}

async function iniciar(){
  if (rodando) return; rodando = true;
  prepararAudio();
  $('#iniciar').classList.add('some');
  $('#desca').classList.remove('on'); $('#repetir').classList.remove('on');
  legenda.classList.remove('on'); legenda.textContent = '';

  mostrarPose(ORDEM_POSES[0]);
  setDog(1); dogOlhando(false);
  glitch(true);
  digitarTag('iniciando perfil...');
  $('#barra').style.width = '100%';
  await espera(900);

  // levanta o óculos
  for (let i = 1; i < ORDEM_POSES.length; i++){
    mostrarPose(ORDEM_POSES[i]);
    if (i === 1){ glitch(false); setDog(2); setTimeout(() => setDog(3), 500); }
    await espera(i === ORDEM_POSES.length - 1 ? 450 : 380);
  }
  $('#status').textContent = 'ONLINE';
  digitarTag('perfil carregado');
  await piscar();
  await espera(250);

  // sorri
  mostrarPose('pose5'); await espera(900);

  // fala
  mostrarPose('pose4'); await espera(150);
  setDog(4); dogOlhando(true);
  await falar();
  dogOlhando(false); setDog(5);

  // final
  mostrarPose('pose5');
  await espera(300);
  legenda.classList.remove('on');
  $('#desca').classList.add('on');
  $('#repetir').classList.add('on');
  rodando = false;
}

$('#btnIniciar').addEventListener('click', iniciar);
$('#repetir').addEventListener('click', iniciar);
})();
