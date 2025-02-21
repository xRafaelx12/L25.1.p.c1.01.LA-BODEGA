export default class Articulos{
    constructor(articuloPrecio){
        this.articuloPrecio=articuloPrecio;
    }

    set articulo(a){
        this._articuloPrecio=+a;
    } 

    get  articulo(){
        return this._articuloPrecio;
    }

    sacarGanancias(){
        return this.articuloPrecio*0.5
    }
}