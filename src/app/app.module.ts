import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';


@NgModule({
  declarations: [ //aquí se cargan los componentes creados
    AppComponent,
    routingComponents,
    ConversorPipe,
    CochesComponent
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
