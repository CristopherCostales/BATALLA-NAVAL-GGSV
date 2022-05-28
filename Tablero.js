class Table{
    constructor(){//Constructor de la clase 
        this.vector=[];
        this.vector2=[];
        this.vec2=[];
        this.tam=0;
    }
    BotChikito(limite){//Metodo que pide el limite propuesto por el usuario y retorna un número random entero
        return Math.floor((Math.random() * ((limite-1) - 0+1)) + 0);
    }
    CrearTabla(t){//Metodo que crea el vector del usuario
        this.tam=t;
        for(let i=0;i<t;i++){
            this.vector[i]="|_|";
        }
    }
    CrearTablaBot(){//Metodos que crea los vectores del bot, uno es para la ubicacion de los barcos y el otro para mostralo en el juego
        for(let i=0;i<this.tam;i++){
            this.vector2[i]="|_|";
        }
        for(let i=0;i<this.tam;i++){
            this.vec2[i]="|_|";
        }
    }
    Disparos(lug){//Metodo que pide la posicion del tiro, y en cambio retornara un valor dependiendo de la posicion que halla tirado
        if(this.vector2[lug]=="|V|"){
            this.vector2[lug]="|X|";
            return 1;//Le diste al barco
        }else if(this.vector2[lug]=="|X|"){
            return 2;//Tiraste en el mismo lugar
        }else
        {
            this.vector2[lug]="|X|";
            return 3;//Tiraste al mar
        }
    }
    DisparosBot(lug){//Metodo del bot que pide la posicion del tiro, y en cambio retornara un valor dependiendo de la posicion que halla tirado
        if(this.vector[lug]=="|V|"){
            this.vector[lug]="|X|";
            return 1;//Le diste al barco
        }else if(this.vector[lug]=="|X|"){
            return 2;//Tiraste en el mismo lugar
        }else
        {
            this.vector[lug]="|X|";
            return 3;//Tiraste al mar
        }
    }
    MostrarTabla(){//Meotodo que muestra al usuario su tablero
        for(let i=0;i<this.tam;i++){
            console.log(i+".- "+this.vector[i]);
        }
    }
    MostrarTablaBot(){//Metodo que se ocupo para pruebas con el bot pero que no se ocupa en el main
        for(let i=0;i<this.tam;i++){
            console.log(i+".- "+this.vector2[i]);
        }
    }
    MostrarRondas(){//Metodo que tras cada ronda muestra los dos tableros, el del usuario con los tiros del bot y el del bot solo con lostiros que ha hecho el usuario
        console.clear();
        console.log("\tFin de esta ronda");
        console.log("Usario:\tBot:");
        for(let i=0;i<this.tam;i++){
            console.log(i+".- "+this.vector[i]+"\t"+i+".-"+this.vec2[i]);
        }
        alert("\tTableros:");
    }
    Varcos(lugar){//Metodo que pide la posicion del tiro e ingresa el barco al vector del usuario
        this.vector[lugar]="|V|";
    }
    VarcosBot(lugar){//Metodo que pide la posicion del tiro e ingresa el barco al vector del bot
        this.vector2[lugar]="|V|";
    }
    VecAux(lu){//Metodo que pide la posicion del tiro e ingresa un disparo en el vector del bor para mostrarle graficamente al usuario donde tiro, sin que vea los barcos del bot
        this.vec2[lu]="|X|";
    }
}