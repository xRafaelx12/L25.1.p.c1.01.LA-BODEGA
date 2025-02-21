import Cl_VArticulo from "./Cl_VArticulos.js";
import Cl_MArticulo from "./Cl_MArticulos.js";

export default class Cl_VBodega{
    
    
    constructor(){
        this.controlador=null
        this.tabla=document.getElementById("tabla_output")
        this.opGanaciasObtenidas=document.getElementById("formulario_ganancias_output")
        this.vArticulosInstancia= new Cl_VArticulo()
        this.vArticulosInstancia.btProcesar.onclick() = () => this.controlador.procesarEmpleado()
    }

    

    procesarEmpleado(){
        this.MArticuloInstancia=new Cl_MArticulo({
        articulos:this.MArticuloInstancia.articulos
        });

        return this.MArticuloInstancia
    }


    reportEnHtmlBodega(opGanaciasObtenidas_Html){
    this.opGanaciasObtenidas.innerHTML=opGanaciasObtenidas_Html
    }
}