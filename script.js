const regalo = document.getElementById("regalo");
const carta = document.getElementById("carta");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");
const lluvia = document.getElementById("lluvia-corazones");
const resetBtn = document.getElementById("reset");

let paso = 0;
let lluviaActiva = false;
let lluviaIntervalo = null;

const cartas = [
  {
    html: `
      <h1>La quiero mucho kukisita ❤️</h1>
      <p>
        Desde que llegó a mi vida, todo se siente más bonito.
      </p>
      <p><small>(toca para continuar)</small></p>
    `,
    lluvia: true
  },
  {
    html: `
      <h1>Gracias ✨</h1>
      <p>
        Gracias por su tiempo, su cariño y cada momento compartido.
      </p>
    `
  },
  {
    html: `
      <h1>Hay algo que quiero decir 💌</h1>
      <p>
        Me encanta la forma en que usted es, tal cual.
      </p>
    `
  },
  {
    html: `
      <img src="imagen.jpeg">
      <h1>¿Nosotros? 🩷</h1>
    `
  }
];

// CLICK REGALO
regalo.addEventListener("click", (e) => {
  e.stopPropagation();

  regalo.style.display = "none";
  carta.classList.remove("oculto");

  musica.volume = 0.5;
  musica.play().catch(() => {});

  mostrarCarta();
});

// CLICK CARTA
carta.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarCarta();
});

function mostrarCarta() {
  if (paso >= cartas.length) return;

  contenido.innerHTML = cartas[paso].html;

  if (cartas[paso].lluvia && !lluviaActiva) {
    iniciarLluvia();
  }

  paso++;
}

function iniciarLluvia() {
  lluviaActiva = true;
  lluviaIntervalo = setInterval(() => {
    const c = document.createElement("div");
    c.className = "corazon";
    c.textContent = "❤️";
    c.style.left = Math.random() * 100 + "vw";
    lluvia.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }, 300);
}

// RESET
resetBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  paso = 0;
  lluviaActiva = false;

  if (lluviaIntervalo) {
    clearInterval(lluviaIntervalo);
    lluviaIntervalo = null;
  }

  lluvia.innerHTML = "";
  contenido.innerHTML = "";

  carta.classList.add("oculto");
  regalo.style.display = "flex";

  musica.pause();
  musica.currentTime = 0;
});




