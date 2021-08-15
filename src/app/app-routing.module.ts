import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './components/wizard/wizard.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';


const routes: Routes = [{path:'wizard',component:WizardComponent},{path:'instrucciones',component:InstruccionesComponent},{path:'**',pathMatch:'full',redirectTo:'wizard'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
