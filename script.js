const regalo = document.getElementById("regalo");
const carta1 = document.getElementById("carta1");
const carta2 = document.getElementById("carta2");
const carta3 = document.getElementById("carta3");
const musica = document.getElementById("musica");
const lluvia = document.getElementById("lluvia-corazones");
const corazonFondo = document.getElementById("corazonFondo");

let clicks = 0;
let lluviaActiva = false;

regalo.addEventListener("click", () => {
  clicks++;
  musica.play().catch(() => {});

  // 1️⃣ Primer click → abrir regalo
  if (clicks === 1) {
    regalo.classList.add("abierto");
  }

  // 2️⃣ Segundo click → carta 2 + corazón
  if (clicks === 2) {
    carta1.classList.remove("activa");
    carta2.classList.add("activa");

    corazonFondo.classList.add("mostrar-corazon");
    iniciarLluvia();
  }
});

// Click en carta 2 → carta 3
carta2.addEventListener("click", () => {
  carta2.classList.remove("activa");
  carta3.classList.add("activa");
});

function iniciarLluvia() {
  if (lluviaActiva) return;
  lluviaActiva = true;

  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.textContent = "❤️";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = 3 + Math.random() * 3 + "s";

    lluvia.appendChild(corazon);

    setTimeout(() => corazon.remove(), 6000);
  }, 300);
}

