import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //este es el nombre con el que vamos a llamar al componente dentro de index.html o donde lo llamemos
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8';
}
