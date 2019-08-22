import { Component, OnInit } from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  constructor(
    private _ropaService: RopaService
  ) {}

  ngOnInit() {
    console.log(this._ropaService.prueba('Prenda1'));
  }

}
