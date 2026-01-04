let indice = 0;

const textos = [
  "Dios te salve, María 🙏",
  "Llena eres de gracia ✨",
  "El Señor es contigo 🤍",
  "Bendita Tú eres 🌸",
  "Entre todas las mujeres 🌷",
  "Y bendito es el fruto de tu vientre, Jesús ✝️",
  "Santa María, Madre de Dios 🕊️",
  "Ruega por nosotros, pecadores 🙌",
  "Ahora y en la hora de nuestra muerte ⏳",
  "Amén 🤍"
];

const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const musica = document.getElementById("musica");
const audioBtn = document.getElementById("audioBtn");

let sonando = false;

audioBtn.addEventListener("click", () => {
  if (!sonando) {
    musica.play();
    audioBtn.textContent = "⏸️ Pausame";
    sonando = true;
  } else {
    musica.pause();
    audioBtn.textContent = "🔊 Tocame";
    sonando = false;
  }
});


boton.addEventListener("click", siguiente);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") siguiente();
});

function siguiente() {
  indice++;

  if (indice >= textos.length) {
    indice = 0;
  }

  imagen.classList.remove("animar");
  texto.classList.remove("animar");

  void imagen.offsetWidth;

  imagen.src = "img/" + (indice + 1) + ".jpg";
  texto.textContent = textos[indice];

  imagen.classList.add("animar");
  texto.classList.add("animar");
}
