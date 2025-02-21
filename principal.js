import Cl_MBogega from "./Cl_MBodega.js"
import Cl_VBodega from "./Cl_VBodega.js"
import Cl_Controlador from "./Cl_Controlador.js"


export default class Principal{
    constructor(){
      
    let vista= new Cl_VBodega(),
    modelo= new Cl_MBogega(),
    controlador = new Cl_Controlador(modelo,vista)
    vista.controlador=controlador
    }
}

