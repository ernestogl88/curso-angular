import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponente {
    public titulo = 'Listado de empleados';
    public empleados: Array<Empleado>;
    ngOnInit() {
        this.empleados = [
            new Empleado('Pepe', 54, 'Developer', true, 'red', '#ccc'),
            new Empleado('Juan', 34, 'Sales manager', false, 'blue', '#ccc')
        ]
        console.log(this.empleados);
    }
}