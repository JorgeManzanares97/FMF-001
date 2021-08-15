import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { NgForm } from '@angular/forms';
import { Jugador } from '../../models/jugador';
import { PaisService } from '../../services/pais.service';
import { Equipo } from '../../models/equipo';
import { generos } from '../../data/clubes';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      showPreviousButton: false,
      showNextButton: false
    }
  };

  public jugador : Jugador;
  public paises : any[]=[];
  public equipos : Equipo[] = generos;
  constructor(private ngWizardService: NgWizardService, private pais: PaisService) {

  }

  ngOnInit() {
    this.jugador = new Jugador(null,null,null,null,null,null,null,null,null,null);
    this.pais.getPaises().subscribe(paises => {
      this.paises = paises;

      this.paises.unshift({
      nombre: '[Seleccione Pais]',
      codigo: ''
      })
      });


  }


  generatePDF() {
    console.log('download pdf...');
    const doc = new jsPDF();
    doc.text("Nombre:", 20, 20);
    doc.text(this.jugador.nombre, 100, 20);
    doc.text("Apellido Paterno:", 20, 40);
    doc.text(this.jugador.apellidoP, 100, 40);
    doc.text("Apellido Materno:",20, 60);
    doc.text(this.jugador.apellidoM, 100, 60);
    doc.text("Fecha de Nacimiento:",20, 80);
    doc.text('' + this.jugador.fecha, 100, 80);
    doc.text("Género:",20, 100);
    doc.text(this.jugador.genero, 100, 100);
    doc.text("Nacionalidad:",20, 120);
    doc.text(this.jugador.nacionalidad, 100, 120);
    doc.text("RFC:",20, 140);
    doc.text(this.jugador.rfc, 100, 140);
    doc.text("Equipo:",20, 160);
    doc.text(this.jugador.equipo, 100, 160);
    doc.text("Ocupación:", 20, 180);
    doc.text(this.jugador.ocupacion, 100, 180);




    doc.save("a4.pdf");
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }

  guardar(forma:NgForm){
    console.log(forma.value);
    console.log(this.jugador);
    if (forma.invalid){
      return Object.values(forma.controls).forEach( control => {
        control.markAsTouched();
        });
    }else{
      this.showNextStep();
    }
  }

  siguiente(){

      this.showNextStep();

  }
}
