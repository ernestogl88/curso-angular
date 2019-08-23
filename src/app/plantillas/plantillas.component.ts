import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  public admin:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  cambiarAdmin(){
    this.admin = !this.admin;
  }

}
