import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrutaComponente} from './fruta/fruta.component';
import {EmpleadoComponente} from './empleado/empleado.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadoComponente},
  {path: 'frutas', component: FrutaComponente}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmpleadoComponente, FrutaComponente]