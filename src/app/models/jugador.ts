import { Equipo } from './equipo';
import { Genero } from './genero';
export class Jugador {
  public nombre	: string;
  public apellidoM : string;
  public apellidoP : string;
  public fecha : Date;
  public genero : string;
  public nacionalidad : string;
  public equipo : string;
  public rfc : string;
  public ocupacion : string;
  public id : number;


  constructor(nombre : string,apellidoM : string,apellidoP : string,fecha : Date,genero : string,nacionalidad : string,equipo : string,rfc : string = null,ocupacion : string,id : number) {
      let today = new Date();
      this.id = today.getTime();
      this.nombre = nombre;
      this.apellidoP = apellidoP;
      this.apellidoM = apellidoM;
      this.fecha = fecha;
      this.genero = genero;
      this.nacionalidad = nacionalidad;
      this.equipo = equipo;
      this.rfc = rfc;
      this.ocupacion = ocupacion;

  }
}
