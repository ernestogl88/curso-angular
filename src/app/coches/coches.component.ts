import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PruebaService } from '../services/prueba.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  providers: []
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;

  constructor(private _pruebaService: PruebaService) {
    this.coche = new Coche('', '', '');
    this.coches = [];
  }

  ngOnInit() {
    this._pruebaService.getArticulos().subscribe(
      result => {
        console.log(result);
      },
      error=>{
        console.log(error)
      }
    )
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '');
  }


}
