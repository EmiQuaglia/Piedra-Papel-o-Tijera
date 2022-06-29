class Player1{

    eleccion;

    constructor(template){
        this.piedra= template.getElementById("piedra");
        this.papel= template.getElementById("papel");
        this.tijera= template.getElementById("tijera");
        
        this.init()
    }

    init(){
        this.piedra.addEventListener("click", ()=>{
            this.elegir("piedra")
        })

        this.papel.addEventListener("click", ()=>{
            this.elegir("papel")
        })

        this.tijera.addEventListener("click", ()=>{
            this.elegir("tijera")
        })
    }

   elegir(element){
    if (element === "piedra"){
        this.eleccion= this.piedra
        alert("Elegiste piedra")
        Tablero.ganador()
        Tablero.cambiarPlayer()
    } else if (element === "papel"){
        this.eleccion= this.papel
        Tablero.ganador()
        Tablero.cambiarPlayer()
    } else if (element === "tijera")
        this.eleccion = this.tijera
        Tablero.ganador()
        Tablero.cambiarPlayer()
    }

}

class Tablero {
    contadorRondaP1 =0
    contadorRondaP2 =0
    contadorPartida1 =0
    contadorPartida2=0
    numeroRondasJuego=0
    numeroPartidas=0
    jugadorActivo = Player1;

    constructor(template){
        this.textoRondas= template.getElementById("numeroRondas")
        this.textoPartidas=template.getElementById("numeroPartidas")
        this.textoRondaP1= template.getElementById("resultadorondas1")
        this.textoRondaP2= template.getElementById("resultadorondas2")
        this.textoPartidasP1=template.getElementById("resultadopartidas1")
        this.textoPartidasP2=template.getElementById("resultadopartidas2")
    }


    ganador(){
        if ((Player1.eleccion== Player1.piedra) && (Compu.eleccion === 3)){
            contadorRondaP1++
            numeroRondasJuego++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP1.innerHTML=`${contadorRondaP1}`
            alert(`Elegiste piedra y Siri eligió tijera. GANASTE LA RONDA`)
        } else if((Player1.eleccionP1== Player1.piedra) && (Compu.eleccion === 2)){
            contadorRondaP2++
            numeroRondasJuego++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
            alert(`Elegiste piedra y Siri eligió papel. SIRI GANÓ LA RONDA`)
        } else if ((Player1.eleccion== Player1.piedra) && (Compu.eleccion === 1)){
            alert("¡Empate! va de nuevo")
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 3)){
            contadorRondaP2++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
            alert(`Elegiste papel y Siri eligió tijera. SIRI GANÓ LA RONDA`)
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 2)){
            alert("¡Empate! va de nuevo")
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 1)){
            contadorRondaP1++
            numeroRondasJuego++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP1.innerHTML=`${contadorRondaP1}`
            alert(`Elegiste papel y Siri eligió piedra. GANASTE LA RONDA`)
        } else if ((Player1.eleccion== Player1.tijera) && (Compu.eleccion === 1)){
            contadorRondaP2++
            numeroRondasJuego++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
            alert(`Elegiste tijera y Siri eligió piedra. SIRI GANÓ LA RONDA`)
        } else if ((Player1.eleccion== Player1.tijera) && (Compu.eleccion === 2)){
            contadorRondaP1++
            numeroRondasJuego++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP1.innerHTML=`${contadorRondaP1}`
            alert(`Elegiste tijera y Siri eligió papel. GANASTE LA RONDA`)
        } else if ((Player1.eleccion== Player1.tijera) && (Compu.eleccion === 3)){
            alert("¡Empate! va de nuevo")
        }
    } 

    cambiarPlayer(){
        while (this.numeroRondasJuego <= 2)
        if (this.jugadorActivo== Player1){
            Player1.elegir()
            this.jugadorActivo = Compu
        } else if (this.jugadorActivo == Compu) {
            Compu.elegir()
            this.jugadorActivo = Player1}

    }
}

class Compu {
    eleccion;
    elemento;

    elegir(){
        this.eleccion = Math.trunc(Math.random() * (3 - 1) + 1)

        if (this.eleccion === 1) {
            elemento = "piedra"
            alert("Siri eligió piedra")
            Tablero.ganador()
            Tablero.cambiarPlayer()

        } else if (this.eleccion === 2) {
            elemento = "papel"
            alert("Siri eligió papel")
            Tablero.ganador()
            Tablero.cambiarPlayer()
        } else if (this.eleccion===3){
            elemento = "tijera"
            alert("Siri eligió tijera")
            Tablero.ganador()
            Tablero.cambiarPlayer()
        }
    }

}


const player = new Player1(document)
const compu = new Compu (document)
const tablero = new Tablero (document)



numeroPartidas++