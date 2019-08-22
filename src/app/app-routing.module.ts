import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrutaComponente} from './fruta/fruta.component';
import {EmpleadoComponente} from './empleado/empleado.component';
import {ContactoComponent} from  './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadoComponente},
  {path: 'frutas', component: FrutaComponente},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contacto/:param', component: ContactoComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmpleadoComponente, FrutaComponente, ContactoComponent, HomeComponent]