import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';   // hacer import del componente
import { FrutaComponente } from './fruta/fruta.component';
import { EmpleadoComponente } from './empleado/empleado.component';

@NgModule({
  declarations: [ //aquí se cargan los componentes creados
    AppComponent,
    FrutaComponente,
    EmpleadoComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
