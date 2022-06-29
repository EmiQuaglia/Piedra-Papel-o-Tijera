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
    } else if (element === "papel"){
        this.eleccion= this.papel
    } else if (element === "tijera")
        this.eleccion = this.tijera
    }

}

class Tablero {
    contadorRonda1 =0
    contadorRonda2 =0
    contadorPartida1 =0
    contadorPartida2=0
    numeroRondas=0
    numeroPartidas=0

    constructor(template){
        this.textoRondas= template.getElementById("numeroRondas")
        this.textoPartidas=template.getElementById("numeroPartidas")
        this.textoRondaP1= template.getElementById("resultadorondas1")
        this.textoRondaP2= template.getElementById("resultadorondas2")
        this.textoPartidasP1=template.getElementById("resultadopartidas1")
        this.textoPartidasP2=template.getElementById("resultadopartidas2")
    }


    ganador(){
        numeroPartidas++
        if ((Player1.eleccion== Player1.piedra) && (Compu.eleccion === 3)){
            contadorRondaP1++
            numeroRondasJuego++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP1.innerHTML=`${contadorRondaP1}`
            alert(`Elegiste piedra y Siri eligió tijera. GANASTE LA RONDA`)
        } else if((Player1.eleccionP1== Player1.piedra) && (Compu.eleccion === 2)){
            contadorRonda2++
            numeroRondas++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
            alert(`Elegiste piedra y Siri eligió papel. SIRI GANÓ LA RONDA`)
        } else if ((Player1.eleccion== Player1.piedra) && (Compu.eleccion === 1)){
            alert("¡Empate! va de nuevo")
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 3)){
            contadorRonda2++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
            alert(`Elegiste papel y Siri eligió tijera. SIRI GANÓ LA RONDA`)
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 2)){
            alert("¡Empate! va de nuevo")
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 1)){
            contadorRonda1++
            numeroRondas++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP1.innerHTML=`${contadorRondaP1}`
            alert(`Elegiste papel y Siri eligió piedra. GANASTE LA RONDA`)
        } else if ((Player1.eleccion== Player1.tijera) && (Compu.eleccion === 1)){
            contadorRonda2++
            numeroRondas++
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
}

class Compu {
    eleccion;
    elemento;

    elegir(){
        this.eleccion = Math.trunc(Math.random() * (3 - 1) + 1)

        if (this.eleccion === 1) {
            elemento = "piedra"
            alert("Siri eligió piedra")
        } else if (this.eleccion === 2) {
            elemento = "papel"
            alert("Siri eligió papel")
        } else if (this.eleccion===3){
            elemento = "tijera"
            alert("Siri eligió tijera")
        }
    }

}
// me falta llamar a los metodos de las funciones para que ande!!!!!!

const player = new Player1(document)
const compu = new Compu (document)
const tablero = new Tablero (document)