class Tablero {
    jugador1;
    jugador2;
    template;
    rondasActuales = 0
    static rondasMax = 3
    partidasTotales = 0

    constructor(template, jugador1, jugador2) {
        this.template = template;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.init();
    }

    init(){
        this.textoRondas= this.template.getElementById("numeroRondas")
        this.textoPartidas=this.template.getElementById("numeroPartidas")
        this.textoRondaP1= this.template.getElementById("resultadorondas1")
        this.textoRondaP2= this.template.getElementById("resultadorondas2")
        this.textoPartidasP1=this.template.getElementById("resultadopartidas1")
        this.textoPartidasP2=this.template.getElementById("resultadopartidas2")
    }
  
    calculadorGanador() {
        if ((this.jugador1.eleccion== "piedra") && (this.jugador2.eleccion == "tijera")){
            this.jugador1.rondasGanadas+=1
            this.rondasActuales++
            this.textoRondas.innerHTML=`${this.rondasActuales}`
            this.textoRondaP1.innerHTML=`${this.jugador1.rondasGanadas}`
            alert(`Elegiste piedra y Siri eligió tijera. GANASTE LA RONDA`)
        } else if((this.jugador1.eleccion== "piedra") && (this.jugador2.eleccion == "papel")){
            this.jugador2.rondasGanadas+=1
            this.rondasActuales++
            this.textoRondas.innerHTML=`${this.rondasActuales}`
            this.textoRondaP2.innerHTML=`${this.jugador2.rondasGanadas}`
            alert(`Elegiste piedra y Siri eligió papel. SIRI GANÓ LA RONDA`)
        } else if ((this.jugador1.eleccion== "piedra") && (this.jugador2.eleccion == "piedra")){
            alert("¡Empate! va de nuevo")
        } else if ((this.jugador1.eleccion== "papel") && (this.jugador2.eleccion == "tijera")){
            this.jugador2.rondasGanadas+=1
            this.rondasActuales++
            this.textoRondas.innerHTML=`${this.rondasActuales}`
            this.textoRondaP2.innerHTML=`${this.jugador2.rondasGanadas}`
            alert(`Elegiste papel y Siri eligió tijera. SIRI GANÓ LA RONDA`)
        } else if ((this.jugador1.eleccion== "papel") && (this.jugador2.eleccion == "papel")){
            alert("¡Empate! va de nuevo")
        } else if ((this.jugador1.eleccion== "papel") && (this.jugador2.eleccion == "piedra")){
            this.jugador1.rondasGanadas+=1
            this.rondasActuales++
            this.textoRondas.innerHTML=`${this.rondasActuales}`
            this.textoRondaP1.innerHTML=`${this.jugador1.rondasGanadas}`
            alert(`Elegiste papel y Siri eligió piedra. GANASTE LA RONDA`)
        } else if ((this.jugador1.eleccion== "tijera") && (this.jugador2.eleccion == "piedra")){
            this.jugador2.rondasGanadas+=1
            this.rondasActuales++
            this.textoRondas.innerHTML=`${this.rondasActuales}`
            this.textoRondaP2.innerHTML=`${this.jugador2.rondasGanadas}`
            alert(`Elegiste tijera y Siri eligió piedra. SIRI GANÓ LA RONDA`)
        } else if ((this.jugador1.eleccion== "tijera") && (this.jugador2.eleccion == "papel")){
            jugador1.rondasGanadas+=1
            this.rondasActuales++
            this.textoRondas.innerHTML=`${this.rondasActuales}`
            this.textoRondaP1.innerHTML=`${this.jugador1.rondasGanadas}`
            alert(`Elegiste tijera y Siri eligió papel. GANASTE LA RONDA`)
        } else if ((this.jugador1.eleccion== "tijera") && (this.jugador2.eleccion == "tijera")){
            alert("¡Empate! va de nuevo")
        }

        this.calcularFin()
    }

    calcularFin() {
        if(this.jugador1.rondasGanadas === 3) {
            this.jugador1.partidasGanadas += 1 
            this.partidasTotales+=1
            this.resetearJuego();  
        } else if (this.jugador2.rondasGanadas === 3) {
            this.jugador2.partidasGanadas += 1 
            this.partidasTotales+=1
            this.resetearJuego();
        } 
    }

    resetearJuego(){
        if ((this.jugador1.rondasGanadas > this.jugador2.rondasGanadas ) && (this.jugador1.partidasGanadas === 1)){
            alert(`¡Felicitaciones! Ganaste ${this.jugador1.partidasGanadas} partida`)
        } else if ((this.jugador1.rondasGanadas > this.jugador2.rondasGanadas ) && (this.jugador1.partidasGanadas >1)) {
            alert(`¡Felicitaciones! Ganaste ${this.jugador1.partidasGanadas} partidas`)
        } else if ((this.jugador2.rondasGanadas > this.jugador1.rondasGanadas ) && (this.jugador2.partidasGanadas === 1)){
            alert(`Siri ha ganado ${this.jugador2.partidasGanadas} partida`)
        } else {
            alert(`Siri ha ganado ${this.jugador2.partidasGanadas} partidas`)
        }
        this.jugador1.rondasGanadas = 0;
        this.jugador2.rondasGanadas = 0;
        this.rondasActuales = 0;
        this.textoRondas.innerHTML=`0`
        this.textoRondaP1.innerHTML=`0`
        this.textoRondaP2.innerHTML= "0"
        this.textoPartidasP1.innerHTML = this.jugador1.partidasGanadas
        this.textoPartidasP2.innerHTML = this.jugador2.partidasGanadas
        this.textoPartidas.innerHTML = this.partidasTotales
    }
}

class Jugador {
    eleccion = '';
    rondasGanadas = 0;
    partidasGanadas = 0;

    setEleccion() {
        console.log('implementar este metodo en los hijos')
    }

}

class Humano extends Jugador {
    setEleccion(eleccion) {
        this.eleccion = eleccion;
    }
}


class Compu extends Jugador {
    elementoElegido;

    setEleccion() {
        this.eleccion = this.eleccionAleatoria()
    }

    eleccionAleatoria() {
       let valueElegido;
       this.elementoElegido = Math.trunc(Math.random() * 3  + 1)
       if (this.elementoElegido === 1) {
        valueElegido = "piedra"
        alert("Siri eligió piedra")
    } else if (this.elementoElegido === 2) {
        valueElegido = "papel"
        alert("Siri eligió papel")
    } else if (this.elementoElegido === 3){
        valueElegido  = "tijera"
        alert("Siri eligió tijera")
    }
    return valueElegido;
    }
}

const jugador1 = new Humano()
const jugador2 = new Compu()

const tablero = new Tablero(document, jugador1, jugador2);


const botones = document.getElementsByClassName('opciones-ppt');

for (let i = 0; i < botones.length; i++) {

    botones[i].addEventListener('click', function() {
      jugador1.setEleccion(this.title)
      jugador2.setEleccion()
      tablero.calculadorGanador()
    });
}