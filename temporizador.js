let tiempoING = 0;
let intervalo = null;

// Función para mostrar el tiempo en formato mm:ss
function mostrarTiempoRestante() {
  const minutos = Math.floor((tiempoING % 3600) / 60);
  const segundos = tiempoING % 60;

  const temporizador = document.getElementById("temporizador");
  temporizador.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Botón para ingresar el tiempo
const tiempoIngresado = () => {
  tiempoING = Number(document.getElementById("tiempoInput").value);
  mostrarTiempoRestante();
};

// Botón Iniciar
const iniciar = () => {
  if (intervalo === null && tiempoING > 0) {
    intervalo = setInterval(() => {
      tiempoING--;
      mostrarTiempoRestante();

      if (tiempoING <= 0) {
        clearInterval(intervalo);
        intervalo = null;
      }
    }, 1000);
  }
};

// Botón Pausar
const pausar = () => {
  clearInterval(intervalo);
  intervalo = null;
};

// Botón Reset
const reset = () => {
  clearInterval(intervalo);
  intervalo = null;
  tiempoING = 0;
  mostrarTiempoRestante();
};

// Manejadores de eventos
const btnIngresar = document.getElementById("ingresarTiempo");
const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnReset = document.getElementById("reset");

btnIngresar.addEventListener("click", tiempoIngresado);
btnIniciar.addEventListener("click", iniciar);
btnPausar.addEventListener("click", pausar);
btnReset.addEventListener("click", reset);
