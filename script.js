/* =========================================
   BARAJA COMPLETA
   ========================================= */

const cartas = [

  "A♥", "2♥", "3♥", "4♥", "5♥",
  "6♥", "7♥", "8♥", "9♥", "10♥",
  "J♥", "Q♥", "K♥",

  "A♦", "2♦", "3♦", "4♦", "5♦",
  "6♦", "7♦", "8♦", "9♦", "10♦",
  "J♦", "Q♦", "K♦",

  "A♣", "2♣", "3♣", "4♣", "5♣",
  "6♣", "7♣", "8♣", "9♣", "10♣",
  "J♣", "Q♣", "K♣",

  "A♠", "2♠", "3♠", "4♠", "5♠",
  "6♠", "7♠", "8♠", "9♠", "10♠",
  "J♠", "Q♠", "K♠"

];


/* =========================================
   IMÁGENES
   ========================================= */

const imagenesCartas = {

  "A♥": "https://i.ibb.co/ynqGcGbd/IMG-8306.png",
  "2♥": "https://i.ibb.co/LhP2r644/IMG-8356.jpg",
  "3♥": "https://i.ibb.co/JwHhdrrF/IMG-8325.jpg",
  "4♥": "https://i.ibb.co/9m64x4JT/IMG-8326.jpg",
  "5♥": "https://i.ibb.co/6cdhzX50/IMG-8327.jpg",
  "6♥": "https://i.ibb.co/ymRF2SyN/IMG-8328.jpg",
  "7♥": "https://i.ibb.co/fdBGLcM9/IMG-8307.jpg",
  "8♥": "https://i.ibb.co/fzpjGPZJ/IMG-8329.jpg",
  "9♥": "https://i.ibb.co/KxsyX4Wz/IMG-8330.jpg",
  "10♥": "https://i.ibb.co/q3ZsPj3y/IMG-8331.jpg",
  "J♥": "https://i.ibb.co/nsCLRwSt/IMG-8313.jpg",
  "Q♥": "https://i.ibb.co/B5d2zv82/IMG-8319.png",
  "K♥": "https://i.ibb.co/Mxjz673J/IMG-8316.jpg",

  "A♦": "https://i.ibb.co/Z1vchJkr/IMG-8305.jpg",
  "2♦": "https://i.ibb.co/fV50g6Kw/IMG-8332.jpg",
  "3♦": "https://i.ibb.co/xtXj8DXK/IMG-8333.jpg",
  "4♦": "https://i.ibb.co/b5Bk4Kr8/IMG-8334.jpg",
  "5♦": "https://i.ibb.co/Nd7BrTJ2/IMG-8335.jpg",
  "6♦": "https://i.ibb.co/nMK42bBD/IMG-8336.jpg",
  "7♦": "https://i.ibb.co/JFqL2CPN/IMG-8308.jpg",
  "8♦": "https://i.ibb.co/vxrqj465/IMG-8337.jpg",
  "9♦": "https://i.ibb.co/bj8XGqfm/IMG-8338.jpg",
  "10♦": "https://i.ibb.co/84SyF7kH/IMG-8339.jpg",
  "J♦": "https://i.ibb.co/0V8jB6NW/IMG-8314.jpg",
  "Q♦": "https://i.ibb.co/k2m0CxJK/IMG-8322.jpg",
  "K♦": "https://i.ibb.co/fV1jpf14/IMG-8315.jpg",

  "A♣": "https://i.ibb.co/bgP0xhYq/IMG-8304.jpg",
  "2♣": "https://i.ibb.co/bRyN8f8B/IMG-8340.jpg",
  "3♣": "https://i.ibb.co/wrrW7xHY/IMG-8341.jpg",
  "4♣": "https://i.ibb.co/MxP84Gvw/IMG-8342.jpg",
  "5♣": "https://i.ibb.co/sJQGz98z/IMG-8343.jpg",
  "6♣": "https://i.ibb.co/3yX5j1bS/IMG-8344.jpg",
  "7♣": "https://i.ibb.co/QvzDT0rn/IMG-8309.jpg",
  "8♣": "https://i.ibb.co/mCP1F1f1/IMG-8345.jpg",
  "9♣": "https://i.ibb.co/RTffVZdN/IMG-8346.jpg",
  "10♣": "https://i.ibb.co/h1sgFHN8/IMG-8347.jpg",
  "J♣": "https://i.ibb.co/twNLs599/IMG-8311.jpg",
  "Q♣": "https://i.ibb.co/Kcqc8jDN/IMG-8320.jpg",
  "K♣": "https://i.ibb.co/mFVL8T16/IMG-8317.jpg",

  "A♠": "https://i.ibb.co/27PGfH8T/IMG-8303.jpg",
  "2♠": "https://i.ibb.co/wj5Vc5s/IMG-8357.jpg",
  "3♠": "https://i.ibb.co/Cpy4Bcx5/IMG-8359.jpg",
  "4♠": "https://i.ibb.co/wZgLwm7r/IMG-8360.jpg",
  "5♠": "https://i.ibb.co/20CF3RpQ/IMG-8351.jpg",
  "6♠": "https://i.ibb.co/qMCM3s8Q/IMG-8352.jpg",
  "7♠": "https://i.ibb.co/9mr4C8nD/IMG-8310.webp",
  "8♠": "https://i.ibb.co/chp9vDq1/IMG-8353.jpg",
  "9♠": "https://i.ibb.co/ycjrfRkC/IMG-8354.jpg",
  "10♠": "https://i.ibb.co/mV8Mk70x/IMG-8355.jpg",
  "J♠": "https://i.ibb.co/zh1bKyHx/IMG-8323.jpg",
  "Q♠": "https://i.ibb.co/d0Ck6jHY/IMG-8321.jpg",
  "K♠": "https://i.ibb.co/ymftXVsY/IMG-8318.jpg"

};


/* =========================================
   VARIABLES
   ========================================= */

let cartaSeleccionada = null;

let contadorActivo = false;

let segundos = 0;

let intervalo = null;


/* =========================================
   ELEMENTOS
   ========================================= */

const stage =
  document.getElementById("stage");

const seconds =
  document.getElementById("seconds");

const box =
  document.getElementById("box");

const deck =
  document.getElementById("deck");

const topCard =
  document.getElementById("topCard");

const selectedCardImage =
  document.getElementById(
    "selectedCardImage"
  );

const startButton =
  document.getElementById(
    "startButton"
  );

const exitButton =
  document.getElementById(
    "exitButton"
  );


/* =========================================
   CONTADOR
   ========================================= */

function iniciarContador() {

  if (contadorActivo)
    return;

  contadorActivo = true;

  segundos = 0;

  seconds.textContent =
    segundos;

  intervalo =
    setInterval(
      function() {

        segundos++;

        if (segundos > 59)
          segundos = 0;

        seconds.textContent =
          segundos;

      },
      1000
    );

}


/* =========================================
   DETENER CONTADOR
   ========================================= */

function detenerContador() {

  contadorActivo = false;

  clearInterval(intervalo);

  intervalo = null;

}


/* =========================================
   START
   ========================================= */

startButton.addEventListener(
  "click",
  function(e) {

    e.stopPropagation();

    iniciarContador();

    startButton.style.display =
      "none";

    exitButton.style.display =
      "flex";

  }
);


/* =========================================
   SALIR
   ========================================= */

exitButton.addEventListener(
  "click",
  function(e) {

    e.stopPropagation();

    detenerContador();

    startButton.style.display =
      "block";

    exitButton.style.display =
      "none";

  }
);


/* =========================================
   TRES TOQUES SECRETOS
   ========================================= */

let toquesSecretos = 0;

let ultimoToqueSecreto = 0;

let tiempoToqueSecreto;


/* =========================================
   DETECTAR TOQUES
   ========================================= */

document.addEventListener(
  "pointerdown",
  function(e) {

    if (
      e.clientX <= 80 &&
      e.clientY <= 80
    ) {

      e.preventDefault();

      e.stopPropagation();

      const ahora =
        Date.now();


      if (
        ahora -
        ultimoToqueSecreto >
        700
      ) {

        toquesSecretos = 0;

      }


      ultimoToqueSecreto =
        ahora;

      toquesSecretos++;


      clearTimeout(
        tiempoToqueSecreto
      );


      if (
        toquesSecretos === 3
      ) {

        abrirCartasSecretas();

        toquesSecretos = 0;

        ultimoToqueSecreto = 0;

        return;

      }


      tiempoToqueSecreto =
        setTimeout(
          function() {

            toquesSecretos = 0;

            ultimoToqueSecreto = 0;

          },
          700
        );

    }

  },
  true
);


/* =========================================
   ABRIR APARTADO SECRETO
   ========================================= */

function abrirCartasSecretas() {

  const panel =
    document.getElementById(
      "cartasSecretas"
    );

  panel.style.display =
    "block";

  crearTodasLasCartas();

}


/* =========================================
   CREAR LAS 52 CARTAS
   ========================================= */

function crearTodasLasCartas() {

  const lista =
    document.getElementById(
      "listaCartas"
    );

  lista.innerHTML = "";


  cartas.forEach(
    function(carta) {

      const elemento =
        document.createElement(
          "div"
        );


      elemento.className =
        "carta-opcion";


      const imagen =
        document.createElement(
          "img"
        );


      imagen.src =
        imagenesCartas[carta];

      imagen.alt =
        carta;

      imagen.draggable =
        false;


      elemento.appendChild(
        imagen
      );


      elemento.addEventListener(
        "click",
        function(e) {

          e.stopPropagation();

          seleccionarCarta(
            carta
          );

        }
      );


      lista.appendChild(
        elemento
      );

    }
  );

}


/* =========================================
   SELECCIONAR CARTA
   ========================================= */

function seleccionarCarta(carta) {

  cartaSeleccionada =
    carta;


  if (
    imagenesCartas[carta]
  ) {

    selectedCardImage.src =
      imagenesCartas[carta];

    selectedCardImage.alt =
      carta;

  }


  cerrarCartasSecretas();

}


/* =========================================
   CERRAR APARTADO
   ========================================= */

function cerrarCartasSecretas() {

  const panel =
    document.getElementById(
      "cartasSecretas"
    );

  panel.style.display =
    "none";

}


/* =========================================
   MOSTRAR MAZO
   ========================================= */

function mostrarMazo() {

  box.style.opacity =
    "0";

  setTimeout(
    function() {

      box.style.display =
        "none";

      deck.style.display =
        "block";

    },
    500
  );

}


/* =========================================
   TOQUE EN EL ESCENARIO
   ========================================= */

stage.addEventListener(
  "click",
  function(e) {

    if (
      e.target === startButton ||
      e.target === exitButton ||
      e.target.closest(
        "#cartasSecretas"
      )
    )
      return;


    if (!contadorActivo)
      return;


    /*
     * Por ahora este toque solamente
     * permite comprobar el funcionamiento
     * de la pantalla sin alterar el tamaño.
     */

  }
);


/* =========================================
   EVITAR ZOOM POR DOBLE TOQUE
   ========================================= */

let ultimoToque = 0;

document.addEventListener(
  "touchend",
  function(e) {

    const ahora =
      Date.now();

    if (
      ahora - ultimoToque <= 300
    ) {

      e.preventDefault();

    }

    ultimoToque =
      ahora;

  },
  {
    passive: false
  }
);
