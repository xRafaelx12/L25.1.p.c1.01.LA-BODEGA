import Articulos from './articulos.js';
export default class laBodega{

    constructor(){
        this.gananciasTotales=0;
    }

    procesarDatos(Articulos){
        this.gananciasTotales+=Articulos.sacarGanancias();
    }

    metodaGananciasTotales(){
        return this.gananciasTotales;
    }        
    

}