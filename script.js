const regalo = document.getElementById("regalo");
const carta = document.getElementById("carta");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");
const lluvia = document.getElementById("lluvia-corazones");

let paso = 0;
let lluviaActiva = false;

const cartas = [
  {
    html: `
      <h1>La quiero mucho kukisita ❤️</h1>
      <p>
        Desde que llegó a mi vida, todo se siente más bonito.
      </p>
      <p><small>(clic)</small></p>
    `,
    lluvia: true
  },
  {
    html: `
      <h1>Gracias ✨</h1>
      <p>
        Gracias por su tiempo, su cariño y su forma de ser.
      </p>
    `
  },
  {
    html: `
      <h1>Quería preguntarle 💌</h1>
      <p>
        ¿Y si seguimos escribiendo nuestra historia juntos?
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

// CLICK AL REGALO → SOLO INICIA
regalo.addEventListener("click", (e) => {
  e.stopPropagation(); // ⛔ evita doble click
  regalo.style.display = "none";
  carta.classList.remove("oculto");

  musica.volume = 0.5;
  musica.play().catch(() => {});

  mostrarCarta();
});

// CLICK A LA CARTA → AVANZA
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
  setInterval(() => {
    const c = document.createElement("div");
    c.className = "corazon";
    c.textContent = "❤️";
    c.style.left = Math.random() * 100 + "vw";
    lluvia.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }, 300);
}

