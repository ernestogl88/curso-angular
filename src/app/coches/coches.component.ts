import { Component, OnInit } from '@angular/core';
import {Coche} from './coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styles: []
})
export class CochesComponent implements OnInit {
  public coche:Coche;
  public coches:Array<Coche>;
  constructor() { 
    this.coche = new Coche('','','');
    this.coches = [];
  }

  ngOnInit() {
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche('','','');
  }

}
