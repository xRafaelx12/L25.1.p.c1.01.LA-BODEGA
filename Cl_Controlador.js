export default class Cl_controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarInformacion() {
    this.modelo.procesarDatos(this.vista.procesarArticulos());
    this.vista.reportEnHtmlBodega(
      this.modelo.gananciasTotales
    );
  }
}