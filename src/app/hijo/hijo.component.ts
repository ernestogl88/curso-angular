import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() propiedad_uno: string;
  @Input('objeto') propiedad_dos: string;
  @Output() desde_el_hijo= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  enviar(event){
    this.desde_el_hijo.emit({
      nombre: 'Desde el hijo'
    });
  }

}
