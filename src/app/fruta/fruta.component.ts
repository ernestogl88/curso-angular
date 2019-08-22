import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponente {
    public nombre_componente: string;
    public listado_frutas: string;
    public nombre: string;
    public trabajos: Array<any>;

    constructor() {
        this.nombre_componente = 'Fruta componente';
        this.listado_frutas = 'Naranja, manzana';
        this.nombre = 'Ernesto';
        this.trabajos = ['Hola', 2];
    }
    mensaje = (msg) => {
        alert(msg)
    }
    ngOnInit() {
        //this.mensaje(67);
    }
}   