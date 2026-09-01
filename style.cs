/* =====================================================
   REINICIO
===================================================== */

* {
  box-sizing: border-box;

  margin: 0;
  padding: 0;

  -webkit-tap-highlight-color: transparent;

  -webkit-user-select: none;
  user-select: none;
}


html {
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  overflow: hidden;

  background: #111;

  /* EVITA ESCALADOS AUTOMÁTICOS */

  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}


body {

  width: 100%;
  height: 100%;

  min-width: 100%;
  min-height: 100%;

  margin: 0;
  padding: 0;

  overflow: hidden;

  background: #111;

  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "SF Pro Display",
    Arial,
    sans-serif;

  /* IMPORTANTE PARA iPHONE */

  touch-action: none;

  -webkit-user-select: none;
  user-select: none;

  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}


/* =====================================================
   APP
===================================================== */

#app {

  position: fixed;

  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  width: 100dvw;
  height: 100dvh;

  overflow: hidden;

  background: #111;

  touch-action: none;
}


/* =====================================================
   PANTALLAS
===================================================== */

#inicio,
#juego {

  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  touch-action: none;
}


.oculto {
  display: none !important;
}


/* =====================================================
   INICIO
===================================================== */

#inicio {

  display: flex;

  align-items: center;
  justify-content: center;

  background: #111;

  touch-action: none;
}


/* =====================================================
   ZONA SECRETA
===================================================== */

#zonaSecreta {

  position: absolute;

  left: 0;
  top: 0;

  width: 70px;
  height: 70px;

  z-index: 5000;

  background: transparent;

  touch-action: none;
}


/* =====================================================
   CONFIGURACIÓN SECRETA
===================================================== */

#configuracion {

  position: absolute;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%);

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 18px;

  padding: 20px;

  width: 190px;

  border-radius: 12px;

  background: #222;

  z-index: 6000;

  touch-action: none;
}


.configuracionOculta {
  display: none !important;
}


/* =====================================================
   HORA
===================================================== */

#horaInput {

  width: 150px;
  height: 40px;

  border: none;

  border-radius: 8px;

  font-size: 18px;

  text-align: center;

  touch-action: manipulation;
}


/* =====================================================
   CERRAR
===================================================== */

#cerrarConfig {

  width: 90px;
  height: 38px;

  border: none;

  border-radius: 8px;

  background: white;

  color: black;

  font-size: 13px;

  font-weight: bold;

  touch-action: manipulation;
}


/* =====================================================
   START
===================================================== */

#startBtn {

  width: 90px;
  height: 38px;

  padding: 0;

  border: none;

  border-radius: 8px;

  background: white;

  color: black;

  font-size: 15px;

  font-weight: bold;

  z-index: 100;

  touch-action: manipulation;
}


/* =====================================================
   JUEGO
===================================================== */

#juego {

  background: #111;

  touch-action: none;
}


/* =====================================================
   RELOJ
===================================================== */

#reloj {

  position: absolute;

  left: 8px;
  top: 8px;

  color: white;

  font-size: 17px;

  line-height: 20px;

  font-weight: 500;

  letter-spacing: -0.3px;

  z-index: 1000;

  white-space: nowrap;

  touch-action: none;
}


/* =====================================================
   SALIR
===================================================== */

#salirBtn {

  position: absolute;

  left: 8px;
  top: 37px;

  width: 32px;
  height: 32px;

  padding: 0;

  border: none;

  background: transparent;

  color: white;

  font-size: 28px;

  line-height: 28px;

  z-index: 1000;

  touch-action: manipulation;
}


/* =====================================================
   CARTAS SACADAS
===================================================== */

#cartasSacadas {

  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  pointer-events: none;

  z-index: 150;

  touch-action: none;
}


/* =====================================================
   MAZO
===================================================== */

#mazo {

  position: absolute;

  left: 50%;
  top: 52%;

  width: 200px;
  height: 280px;

  transform:
    translate(-50%, -50%);

  z-index: 100;

  pointer-events: auto;

  touch-action: none;

  will-change: transform;
}


/* =====================================================
   CARTAS DEL MAZO
===================================================== */

.cartaMazo {

  position: absolute;

  left: 0;
  top: 0;

  width: 200px;
  height: 280px;

  border-radius: 11px;

  overflow: hidden;

  background: white;

  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.25);

  pointer-events: none;

  touch-action: none;
}


.cartaMazo img {

  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  pointer-events: none;

  -webkit-user-drag: none;
}


/* =====================================================
   CARTA JUGADOR
===================================================== */

.cartaJugador {

  position: absolute;

  left: 50%;
  top: 52%;

  width: 200px;
  height: 280px;

  margin: 0;

  border-radius: 11px;

  perspective: 1000px;

  user-select: none;

  -webkit-user-select: none;

  touch-action: none;

  pointer-events: auto;

  will-change: transform;

  z-index: 200;
}


/* =====================================================
   INTERIOR
===================================================== */

.cartaInterior {

  position: relative;

  width: 100%;
  height: 100%;

  transform-style: preserve-3d;

  -webkit-transform-style: preserve-3d;

  transition:
    transform 0.28s ease;

  will-change: transform;
}


/* =====================================================
   VOLTEO
===================================================== */

.cartaJugador.volteada .cartaInterior {

  transform:
    rotateY(180deg);

  -webkit-transform:
    rotateY(180deg);
}


/* =====================================================
   CARAS
===================================================== */

.caraCarta {

  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  border-radius: 11px;

  overflow: hidden;

  background: white;

  backface-visibility: hidden;

  -webkit-backface-visibility: hidden;
}


.caraCarta img {

  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  pointer-events: none;

  -webkit-user-drag: none;
}


/* =====================================================
   FRENTE
===================================================== */

.caraFrente {

  transform:
    rotateY(180deg);

  -webkit-transform:
    rotateY(180deg);
}


/* =====================================================
   CAJA
===================================================== */

#caja {

  position: absolute;

  left: 50%;
  top: 52%;

  width: 250px;
  height: 350px;

  transform:
    translate(-50%, -50%);

  z-index: 300;

  touch-action: none;

  will-change: transform;
}


#caja img {

  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  pointer-events: none;

  -webkit-user-drag: none;
}


/* =====================================================
   CAJA OCULTA
===================================================== */

.ocultaCaja {
  display: none !important;
}


/* =====================================================
   PREVENIR SELECCIÓN
===================================================== */

button,
input,
img {

  -webkit-user-select: none;
  user-select: none;
}


/* =====================================================
   iPHONE: ÁREA SEGURA
===================================================== */

@supports (height: 100dvh) {

  #app {

    width: 100dvw;
    height: 100dvh;
  }

  #inicio,
  #juego {

    width: 100dvw;
    height: 100dvh;
  }
}
