import { Component, OnInit } from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
   public listado_ropa:Array<string>;
   public prenda_a_guardar:string;
  constructor(
    private _ropaService: RopaService
  ) {}

  ngOnInit() {
    this.listado_ropa = this._ropaService.getColeccion();
    console.log(this.listado_ropa);
  }
  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }
  borrarPrenda(i:number){
    this._ropaService.deleteRopa(i);
  }
}
