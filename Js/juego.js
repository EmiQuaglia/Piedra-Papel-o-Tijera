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
        } else if((Player1.eleccionP1== Player1.piedra) && (Compu.eleccion === 2)){
            contadorRonda2++
            numeroRondas++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
        } else if ((Player1.eleccion== Player1.piedra) && (Compu.eleccion === 1)){
            alert("¡Empate! va de nuevo")
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 3)){
            contadorRonda2++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 2)){
            alert("¡Empate! va de nuevo")
        } else if ((Player1.eleccion== Player1.papel) && (Compu.eleccion === 1)){
            contadorRonda1++
            numeroRondas++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP1.innerHTML=`${contadorRondaP1}`
        } else if ((Player1.eleccion== Player1.tijera) && (Compu.eleccion === 1)){
            contadorRonda2++
            numeroRondas++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP2.innerHTML=`${contadorRondaP2}`
        } else if ((Player1.eleccion== Player1.tijera) && (Compu.eleccion === 2)){
            contadorRondaP1++
            numeroRondasJuego++
            this.textoRondas.innerHTML=`${numeroRondasJuego}`
            this.textoRondaP1.innerHTML=`${contadorRondaP1}`
        } else if ((Player1.eleccion== Player1.tijera) && (Compu.eleccion === 3)){
            alert("¡Empate! va de nuevo")
        }
    } 
}

class Compu {
    eleccion;

    elegir(){
        this.eleccion = Math.trunc(Math.random() * (3 - 1) + 1)
        // si la eleccion es uno, la variable toma valor piedra, y hay que imprimir alert o algo.
    }

}

// me falta llamar a los metodos de las funciones para que ande!!!!!!

const player = new Player1(document)