/* =====================================================
   CONTROL DE VIEWPORT PARA IPHONE
===================================================== */

(function () {

  function ajustarViewport() {

    const app =
      document.getElementById("app");

    if (!app) {
      return;
    }

    const viewport =
      window.visualViewport;

    if (viewport) {

      app.style.width =
        viewport.width + "px";

      app.style.height =
        viewport.height + "px";

      app.style.left =
        viewport.offsetLeft + "px";

      app.style.top =
        viewport.offsetTop + "px";

    } else {

      app.style.width =
        window.innerWidth + "px";

      app.style.height =
        window.innerHeight + "px";

      app.style.left = "0px";
      app.style.top = "0px";
    }
  }


  ajustarViewport();


  if (window.visualViewport) {

    window.visualViewport.addEventListener(
      "resize",
      ajustarViewport
    );

    window.visualViewport.addEventListener(
      "scroll",
      ajustarViewport
    );
  }


  window.addEventListener(
    "resize",
    ajustarViewport
  );


  window.addEventListener(
    "orientationchange",
    function () {

      setTimeout(
        ajustarViewport,
        100
      );

    }
  );


  /* =========================================
     BLOQUEAR GESTOS DE ZOOM
  ========================================= */

  document.addEventListener(
    "gesturestart",
    function (e) {

      e.preventDefault();

    },
    {
      passive: false
    }
  );


  document.addEventListener(
    "gesturechange",
    function (e) {

      e.preventDefault();

    },
    {
      passive: false
    }
  );


  document.addEventListener(
    "gestureend",
    function (e) {

      e.preventDefault();

    },
    {
      passive: false
    }
  );


  /* =========================================
     EVITAR DOBLE TOQUE PARA ZOOM
  ========================================= */

  let ultimoToque = 0;


  document.addEventListener(
    "touchend",
    function (e) {

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


  /* =========================================
     EVITAR PINCH ZOOM
  ========================================= */

  document.addEventListener(
    "touchmove",
    function (e) {

      if (e.touches.length > 1) {

        e.preventDefault();

      }

    },
    {
      passive: false
    }
  );

})();


/* =====================================================
   ELEMENTOS
===================================================== */

const inicio =
  document.getElementById("inicio");

const juego =
  document.getElementById("juego");

const startBtn =
  document.getElementById("startBtn");

const salirBtn =
  document.getElementById("salirBtn");

const horaInput =
  document.getElementById("horaInput");

const reloj =
  document.getElementById("reloj");

const caja =
  document.getElementById("caja");

const mazo =
  document.getElementById("mazo");

const cartasSacadas =
  document.getElementById("cartasSacadas");


/* =====================================================
   CONFIGURACIÓN SECRETA
===================================================== */

const configuracion =
  document.getElementById("configuracion");

const zonaSecreta =
  document.getElementById("zonaSecreta");

const cerrarConfig =
  document.getElementById("cerrarConfig");


/* =====================================================
   REVERSO
===================================================== */

const reverso =
  "https://i.ibb.co/TB328bJN/IMG-8289.jpg";


/* =====================================================
   52 CARTAS
===================================================== */

const cartas = [

  /* =========================
     CORAZONES
  ========================= */

  {
    nombre: "A♥",
    valor: "A",
    palo: "hearts",
    imagen: "https://i.ibb.co/ynqGcGbd/IMG-8306.png"
  },

  {
    nombre: "2♥",
    valor: "2",
    palo: "hearts",
    imagen: "https://i.ibb.co/LhP2r644/IMG-8356.jpg"
  },

  {
    nombre: "3♥",
    valor: "3",
    palo: "hearts",
    imagen: "https://i.ibb.co/JwHhdrrF/IMG-8325.jpg"
  },

  {
    nombre: "4♥",
    valor: "4",
    palo: "hearts",
    imagen: "https://i.ibb.co/9m64x4JT/IMG-8326.jpg"
  },

  {
    nombre: "5♥",
    valor: "5",
    palo: "hearts",
    imagen: "https://i.ibb.co/6cdhzX50/IMG-8327.jpg"
  },

  {
    nombre: "6♥",
    valor: "6",
    palo: "hearts",
    imagen: "https://i.ibb.co/ymRF2SyN/IMG-8328.jpg"
  },

  {
    nombre: "7♥",
    valor: "7",
    palo: "hearts",
    imagen: "https://i.ibb.co/fdBGLcM9/IMG-8307.jpg"
  },

  {
    nombre: "8♥",
    valor: "8",
    palo: "hearts",
    imagen: "https://i.ibb.co/fzpjGPZJ/IMG-8329.jpg"
  },

  {
    nombre: "9♥",
    valor: "9",
    palo: "hearts",
    imagen: "https://i.ibb.co/KxsyX4Wz/IMG-8330.jpg"
  },

  {
    nombre: "10♥",
    valor: "10",
    palo: "hearts",
    imagen: "https://i.ibb.co/q3ZsPj3y/IMG-8331.jpg"
  },

  {
    nombre: "J♥",
    valor: "J",
    palo: "hearts",
    imagen: "https://i.ibb.co/nsCLRwSt/IMG-8313.jpg"
  },

  {
    nombre: "Q♥",
    valor: "Q",
    palo: "hearts",
    imagen: "https://i.ibb.co/B5d2zv82/IMG-8319.png"
  },

  {
    nombre: "K♥",
    valor: "K",
    palo: "hearts",
    imagen: "https://i.ibb.co/Mxjz673J/IMG-8316.jpg"
  },


  /* =========================
     DIAMANTES
  ========================= */

  {
    nombre: "A♦",
    valor: "A",
    palo: "diamonds",
    imagen: "https://i.ibb.co/Z1vchJkr/IMG-8305.jpg"
  },

  {
    nombre: "2♦",
    valor: "2",
    palo: "diamonds",
    imagen: "https://i.ibb.co/fV50g6Kw/IMG-8332.jpg"
  },

  {
    nombre: "3♦",
    valor: "3",
    palo: "diamonds",
    imagen: "https://i.ibb.co/xtXj8DXK/IMG-8333.jpg"
  },

  {
    nombre: "4♦",
    valor: "4",
    palo: "diamonds",
    imagen: "https://i.ibb.co/b5Bk4Kr8/IMG-8334.jpg"
  },

  {
    nombre: "5♦",
    valor: "5",
    palo: "diamonds",
    imagen: "https://i.ibb.co/Nd7BrTJ2/IMG-8335.jpg"
  },

  {
    nombre: "6♦",
    valor: "6",
    palo: "diamonds",
    imagen: "https://i.ibb.co/nMK42bBD/IMG-8336.jpg"
  },

  {
    nombre: "7♦",
    valor: "7",
    palo: "diamonds",
    imagen: "https://i.ibb.co/JFqL2CPN/IMG-8308.jpg"
  },

  {
    nombre: "8♦",
    valor: "8",
    palo: "diamonds",
    imagen: "https://i.ibb.co/vxrqj465/IMG-8337.jpg"
  },

  {
    nombre: "9♦",
    valor: "9",
    palo: "diamonds",
    imagen: "https://i.ibb.co/bj8XGqfm/IMG-8338.jpg"
  },

  {
    nombre: "10♦",
    valor: "10",
    palo: "diamonds",
    imagen: "https://i.ibb.co/84SyF7kH/IMG-8339.jpg"
  },

  {
    nombre: "J♦",
    valor: "J",
    palo: "diamonds",
    imagen: "https://i.ibb.co/0V8jB6NW/IMG-8314.jpg"
  },

  {
    nombre: "Q♦",
    valor: "Q",
    palo: "diamonds",
    imagen: "https://i.ibb.co/k2m0CxJK/IMG-8322.jpg"
  },

  {
    nombre: "K♦",
    valor: "K",
    palo: "diamonds",
    imagen: "https://i.ibb.co/fV1jpf14/IMG-8315.jpg"
  },


  /* =========================
     TRÉBOLES
  ========================= */

  {
    nombre: "A♣",
    valor: "A",
    palo: "clubs",
    imagen: "https://i.ibb.co/bgP0xhYq/IMG-8304.jpg"
  },

  {
    nombre: "2♣",
    valor: "2",
    palo: "clubs",
    imagen: "https://i.ibb.co/bRyN8f8B/IMG-8340.jpg"
  },

  {
    nombre: "3♣",
    valor: "3",
    palo: "clubs",
    imagen: "https://i.ibb.co/wrrW7xHY/IMG-8341.jpg"
  },

  {
    nombre: "4♣",
    valor: "4",
    palo: "clubs",
    imagen: "https://i.ibb.co/MxP84Gvw/IMG-8342.jpg"
  },

  {
    nombre: "5♣",
    valor: "5",
    palo: "clubs",
    imagen: "https://i.ibb.co/sJQGz98z/IMG-8343.jpg"
  },

  {
    nombre: "6♣",
    valor: "6",
    palo: "clubs",
    imagen: "https://i.ibb.co/3yX5j1bS/IMG-8344.jpg"
  },

  {
    nombre: "7♣",
    valor: "7",
    palo: "clubs",
    imagen: "https://i.ibb.co/QvzDT0rn/IMG-8309.jpg"
  },

  {
    nombre: "8♣",
    valor: "8",
    palo: "clubs",
    imagen: "https://i.ibb.co/mCP1F1f1/IMG-8345.jpg"
  },

  {
    nombre: "9♣",
    valor: "9",
    palo: "clubs",
    imagen: "https://i.ibb.co/RTffVZdN/IMG-8346.jpg"
  },

  {
    nombre: "10♣",
    valor: "10",
    palo: "clubs",
    imagen: "https://i.ibb.co/h1sgFHN8/IMG-8347.jpg"
  },

  {
    nombre: "J♣",
    valor: "J",
    palo: "clubs",
    imagen: "https://i.ibb.co/twNLs599/IMG-8311.jpg"
  },

  {
    nombre: "Q♣",
    valor: "Q",
    palo: "clubs",
    imagen: "https://i.ibb.co/Kcqc8jDN/IMG-8320.jpg"
  },

  {
    nombre: "K♣",
    valor: "K",
    palo: "clubs",
    imagen: "https://i.ibb.co/mFVL8T16/IMG-8317.jpg"
  },


  /* =========================
     ESPADAS
  ========================= */

  {
    nombre: "A♠",
    valor: "A",
    palo: "spades",
    imagen: "https://i.ibb.co/27PGfH8T/IMG-8303.jpg"
  },

  {
    nombre: "2♠",
    valor: "2",
    palo: "spades",
    imagen: "https://i.ibb.co/wj5Vc5s/IMG-8357.jpg"
  },

  {
    nombre: "3♠",
    valor: "3",
    palo: "spades",
    imagen: "https://i.ibb.co/Cpy4Bcx5/IMG-8359.jpg"
  },

  {
    nombre: "4♠",
    valor: "4",
    palo: "spades",
    imagen: "https://i.ibb.co/wZgLwm7r/IMG-8360.jpg"
  },

  {
    nombre: "5♠",
    valor: "5",
    palo: "spades",
    imagen: "https://i.ibb.co/20CF3RpQ/IMG-8351.jpg"
  },

  {
    nombre: "6♠",
    valor: "6",
    palo: "spades",
    imagen: "https://i.ibb.co/qMCM3s8Q/IMG-8352.jpg"
  },

  {
    nombre: "7♠",
    valor: "7",
    palo: "spades",
    imagen: "https://i.ibb.co/9mr4C8nD/IMG-8310.webp"
  },

  {
    nombre: "8♠",
    valor: "8",
    palo: "spades",
    imagen: "https://i.ibb.co/chp9vDq1/IMG-8353.jpg"
  },

  {
    nombre: "9♠",
    valor: "9",
    palo: "spades",
    imagen: "https://i.ibb.co/ycjrfRkC/IMG-8354.jpg"
  },

  {
    nombre: "10♠",
    valor: "10",
    palo: "spades",
    imagen: "https://i.ibb.co/mV8Mk70x/IMG-8355.jpg"
  },

  {
    nombre: "J♠",
    valor: "J",
    palo: "spades",
    imagen: "https://i.ibb.co/zh1bKyHx/IMG-8323.jpg"
  },

  {
    nombre: "Q♠",
    valor: "Q",
    palo: "spades",
    imagen: "https://i.ibb.co/d0Ck6jHY/IMG-8321.jpg"
  },

  {
    nombre: "K♠",
    valor: "K",
    palo: "spades",
    imagen: "https://i.ibb.co/ymftXVsY/IMG-8318.jpg"
  }

];


/* =====================================================
   VARIABLES
===================================================== */

let horas = 12;
let minutos = 0;
let segundos = 0;

let intervalo = null;

let mostrarSegundos = true;

let segundoSeleccionado = null;

let paloSeleccionado = null;

let cartaForzada = null;

let primeraCartaVolteada = false;

let mazoMezclado = [];

let indiceCarta = 0;


/* =====================================================
   TOQUES SECRETOS
===================================================== */

let toquesSecretos = 0;

let temporizadorToques = null;


/* =====================================================
   MEZCLAR
===================================================== */

function mezclar(array) {

  const nuevo = [...array];

  for (
    let i = nuevo.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      nuevo[i],
      nuevo[j]
    ] =
    [
      nuevo[j],
      nuevo[i]
    ];
  }

  return nuevo;
}


/* =====================================================
   CONFIGURACIÓN SECRETA
===================================================== */

zonaSecreta.addEventListener(
  "pointerup",
  function(e) {

    e.stopPropagation();

    toquesSecretos++;

    clearTimeout(
      temporizadorToques
    );

    temporizadorToques =
      setTimeout(
        function() {

          toquesSecretos = 0;

        },
        700
      );


    if (toquesSecretos >= 3) {

      toquesSecretos = 0;

      clearTimeout(
        temporizadorToques
      );

      configuracion.classList.remove(
        "configuracionOculta"
      );
    }

  }
);


/* =====================================================
   CERRAR CONFIGURACIÓN
===================================================== */

cerrarConfig.addEventListener(
  "click",
  function(e) {

    e.stopPropagation();

    configuracion.classList.add(
      "configuracionOculta"
    );

  }
);


/* =====================================================
   RELOJ
===================================================== */

function actualizarReloj() {

  const h =
    String(horas)
      .padStart(2, "0");

  const m =
    String(minutos)
      .padStart(2, "0");

  const s =
    String(segundos)
      .padStart(2, "0");


  if (mostrarSegundos) {

    reloj.textContent =
      `${h}:${m}:${s}`;

  } else {

    reloj.textContent =
      `${h}:${m}`;
  }
}


function avanzarReloj() {

  segundos++;

  if (segundos >= 60) {

    segundos = 0;
    minutos++;
  }

  if (minutos >= 60) {

    minutos = 0;
    horas++;
  }

  if (horas >= 24) {

    horas = 0;
  }

  actualizarReloj();
}


/* =====================================================
   SEGUNDO → CARTA
===================================================== */

function valorPorSegundo(segundo) {

  let numero =
    segundo % 13;

  if (numero === 0) {
    numero = 13;
  }


  if (numero === 1) {
    return "A";
  }

  if (
    numero >= 2 &&
    numero <= 10
  ) {
    return String(numero);
  }

  if (numero === 11) {
    return "J";
  }

  if (numero === 12) {
    return "Q";
  }

  return "K";
}


/* =====================================================
   OBTENER CARTA FORZADA
===================================================== */

function obtenerCartaSeleccionada() {

  if (
    segundoSeleccionado === null ||
    paloSeleccionado === null
  ) {
    return null;
  }

  const valor =
    valorPorSegundo(
      segundoSeleccionado
    );

  return cartas.find(
    carta =>
      carta.valor === valor &&
      carta.palo === paloSeleccionado
  );
}


/* =====================================================
   CREAR MAZO
===================================================== */

function crearMazo() {

  mazo.innerHTML = "";

  for (
    let i = 0;
    i < 7;
    i++
  ) {

    const carta =
      document.createElement(
        "div"
      );

    carta.className =
      "cartaMazo";

    carta.style.transform =
      `translateY(${i * 0.55}px)`;


    const img =
      document.createElement(
        "img"
      );

    img.src =
      reverso;

    img.draggable =
      false;


    carta.appendChild(
      img
    );

    mazo.appendChild(
      carta
    );
  }
}


/* =====================================================
   PREPARAR MAZO
===================================================== */

function prepararMazo() {

  const mezcla =
    mezclar(cartas);


  if (cartaForzada) {

    mazoMezclado =
      mezcla.filter(
        carta =>
          carta.nombre !==
          cartaForzada.nombre
      );

  } else {

    mazoMezclado =
      mezcla;
  }


  indiceCarta = 0;
}


/* =====================================================
   SACAR CARTA
===================================================== */

function sacarCarta() {

  if (
    indiceCarta >=
    mazoMezclado.length
  ) {
    return;
  }


  const carta =
    mazoMezclado[
      indiceCarta
    ];


  crearCarta(
    carta
  );


  indiceCarta++;
}


/* =====================================================
   CREAR CARTA
===================================================== */

function crearCarta(datosCarta) {

  const elemento =
    document.createElement(
      "div"
    );


  elemento.className =
    "cartaJugador";


  elemento.cartaDatos =
    datosCarta;


  elemento.style.zIndex =
    String(
      200 + indiceCarta
    );


  const interior =
    document.createElement(
      "div"
    );


  interior.className =
    "cartaInterior";


  /* =====================================
     REVERSO
  ===================================== */

  const reversoDiv =
    document.createElement(
      "div"
    );


  reversoDiv.className =
    "caraCarta caraReverso";


  const imagenReverso =
    document.createElement(
      "img"
    );


  imagenReverso.src =
    reverso;


  imagenReverso.draggable =
    false;


  reversoDiv.appendChild(
    imagenReverso
  );


  /* =====================================
     FRENTE
  ===================================== */

  const frenteDiv =
    document.createElement(
      "div"
    );


  frenteDiv.className =
    "caraCarta caraFrente";


  const imagenFrente =
    document.createElement(
      "img"
    );


  imagenFrente.src =
    datosCarta.imagen;


  imagenFrente.draggable =
    false;


  frenteDiv.appendChild(
    imagenFrente
  );


  interior.appendChild(
    reversoDiv
  );


  interior.appendChild(
    frenteDiv
  );


  elemento.appendChild(
    interior
  );


  /* =================================================
     POSICIÓN
  ================================================= */

  let posicionX = 0;
  let posicionY = 0;

  let inicioX = 0;
  let inicioY = 0;

  let moviendo = false;
  let pointerActivo = false;


  function aplicarPosicion() {

    elemento.style.transform =
      `translate(
        calc(-50% + ${posicionX}px),
        calc(-50% + ${posicionY}px)
      )`;
  }


  aplicarPosicion();


  /* =================================================
     POINTER DOWN
  ================================================= */

  elemento.addEventListener(
    "pointerdown",
    function(e) {

      e.stopPropagation();


      inicioX =
        e.clientX;

      inicioY =
        e.clientY;


      moviendo =
        false;

      pointerActivo =
        true;


      elemento.setPointerCapture(
        e.pointerId
      );
    }
  );


  /* =================================================
     POINTER MOVE
  ================================================= */

  elemento.addEventListener(
    "pointermove",
    function(e) {

      if (!pointerActivo) {
        return;
      }


      e.stopPropagation();


      const dx =
        e.clientX -
        inicioX;

      const dy =
        e.clientY -
        inicioY;


      if (
        Math.abs(dx) > 2 ||
        Math.abs(dy) > 2
      ) {

        moviendo =
          true;
      }


      elemento.style.transform =
        `translate(
          calc(-50% + ${posicionX + dx}px),
          calc(-50% + ${posicionY + dy}px)
        )`;
    }
  );


  /* =================================================
     POINTER UP
  ================================================= */

  elemento.addEventListener(
    "pointerup",
    function(e) {

      if (!pointerActivo) {
        return;
      }


      e.stopPropagation();


      const dx =
        e.clientX -
        inicioX;

      const dy =
        e.clientY -
        inicioY;


      posicionX +=
        dx;

      posicionY +=
        dy;


      aplicarPosicion();


      pointerActivo =
        false;


      if (moviendo) {

        moviendo =
          false;

        return;
      }


      voltearCarta(
        elemento
      );
    }
  );


  /* =================================================
     POINTER CANCEL
  ================================================= */

  elemento.addEventListener(
    "pointercancel",
    function(e) {

      e.stopPropagation();


      pointerActivo =
        false;

      moviendo =
        false;


      aplicarPosicion();
    }
  );


  /* =================================================
     CLICK
  ================================================= */

  elemento.addEventListener(
    "click",
    function(e) {

      e.stopPropagation();

    }
  );


  cartasSacadas.appendChild(
    elemento
  );
}


/* =====================================================
   VOLTEAR CARTA
===================================================== */

function voltearCarta(elemento) {

  if (
    !primeraCartaVolteada &&
    cartaForzada
  ) {

    elemento.cartaDatos =
      cartaForzada;


    const imagen =
      elemento.querySelector(
        ".caraFrente img"
      );


    if (imagen) {

      imagen.src =
        cartaForzada.imagen;
    }


    primeraCartaVolteada =
      true;
  }


  elemento.classList.toggle(
    "volteada"
  );
}


/* =====================================================
   CAJA
===================================================== */

let cajaPresionada = false;

let cajaInicioX = 0;
let cajaInicioY = 0;


caja.addEventListener(
  "pointerdown",
  function(e) {

    e.stopPropagation();


    cajaPresionada =
      true;


    cajaInicioX =
      e.clientX;

    cajaInicioY =
      e.clientY;


    caja.setPointerCapture(
      e.pointerId
    );
  }
);


caja.addEventListener(
  "pointerup",
  function(e) {

    e.stopPropagation();


    if (!cajaPresionada) {
      return;
    }


    cajaPresionada =
      false;


    const dx =
      e.clientX -
      cajaInicioX;

    const dy =
      e.clientY -
      cajaInicioY;


    if (
      Math.abs(dx) < 15 &&
      Math.abs(dy) < 15
    ) {

      return;
    }


    const rect =
      caja.getBoundingClientRect();


    const x =
      cajaInicioX -
      rect.left;

    const y =
      cajaInicioY -
      rect.top;


    const mitadX =
      rect.width / 2;

    const mitadY =
      rect.height / 2;


    /* =====================================
       ARRIBA IZQUIERDA
       DIAMANTES
    ===================================== */

    if (
      x < mitadX &&
      y < mitadY
    ) {

      paloSeleccionado =
        "diamonds";
    }


    /* =====================================
       ARRIBA DERECHA
       TRÉBOLES
    ===================================== */

    else if (
      x >= mitadX &&
      y < mitadY
    ) {

      paloSeleccionado =
        "clubs";
    }


    /* =====================================
       ABAJO IZQUIERDA
       CORAZONES
    ===================================== */

    else if (
      x < mitadX &&
      y >= mitadY
    ) {

      paloSeleccionado =
        "hearts";
    }


    /* =====================================
       ABAJO DERECHA
       ESPADAS
    ===================================== */

    else {

      paloSeleccionado =
        "spades";
    }


    segundoSeleccionado =
      segundos;


    cartaForzada =
      obtenerCartaSeleccionada();


    prepararMazo();


    mostrarSegundos =
      false;


    actualizarReloj();


    caja.style.transition =
      "transform .25s ease";


    caja.style.transform =
      "translate(-50%, 120%)";


    setTimeout(
      function() {

        caja.classList.add(
          "ocultaCaja"
        );

      },
      250
    );
  }
);


/* =====================================================
   TOCAR MAZO
===================================================== */

mazo.addEventListener(
  "pointerup",
  function(e) {

    e.stopPropagation();


    if (
      !caja.classList.contains(
        "ocultaCaja"
      )
    ) {

      return;
    }


    sacarCarta();
  }
);


/* =====================================================
   EVITAR CARTAS POR TOQUES GENERALES
===================================================== */

juego.addEventListener(
  "pointerup",
  function(e) {

    return;

  }
);


/* =====================================================
   PRE-CARGAR IMÁGENES
===================================================== */

function precargarImagenes() {

  const imgReverso =
    new Image();


  imgReverso.src =
    reverso;


  cartas.forEach(
    carta => {

      const img =
        new Image();


      img.src =
        carta.imagen;
    }
  );
}


/* =====================================================
   START
===================================================== */

startBtn.addEventListener(
  "click",
  function() {

    const valor =
      horaInput.value;


    if (valor) {

      const partes =
        valor.split(":");


      horas =
        parseInt(
          partes[0]
        ) || 0;


      minutos =
        parseInt(
          partes[1]
        ) || 0;


      segundos =
        parseInt(
          partes[2]
        ) || 0;
    }


    /* =====================================
       REINICIAR
    ===================================== */

    mostrarSegundos =
      true;


    segundoSeleccionado =
      null;


    paloSeleccionado =
      null;


    cartaForzada =
      null;


    primeraCartaVolteada =
      false;


    indiceCarta =
      0;


    cartasSacadas.innerHTML =
      "";


    prepararMazo();


    /* =====================================
       MOSTRAR JUEGO
    ===================================== */

    inicio.classList.add(
      "oculto"
    );


    juego.classList.remove(
      "oculto"
    );


    /* =====================================
       RESTAURAR CAJA
    ===================================== */

    caja.classList.remove(
      "ocultaCaja"
    );


    caja.style.transition =
      "none";


    caja.style.transform =
      "translate(-50%, -50%)";


    /* =====================================
       CREAR MAZO
    ===================================== */

    crearMazo();


    /* =====================================
       RELOJ
    ===================================== */

    actualizarReloj();


    /* =====================================
       IMÁGENES
    ===================================== */

    precargarImagenes();


    /* =====================================
       REINICIAR INTERVALO
    ===================================== */

    clearInterval(
      intervalo
    );


    intervalo =
      setInterval(
        avanzarReloj,
        1000
      );

  }
);


/* =====================================================
   SALIR
===================================================== */

salirBtn.addEventListener(
  "click",
  function(e) {

    e.stopPropagation();


    clearInterval(
      intervalo
    );


    intervalo =
      null;


    juego.classList.add(
      "oculto"
    );


    inicio.classList.remove(
      "oculto"
    );

  }
);


/* =====================================================
   INICIALIZACIÓN
===================================================== */

crearMazo();

actualizarReloj();
