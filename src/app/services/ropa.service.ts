import { Injectable } from '@angular/core';

@Injectable()

export class RopaService {
    public nombre_prenda:string;
    public coleccion_ropa = ['Pantalón', 'Camiseta']
    prueba(nombre_prenda){
        return nombre_prenda;
    }

    addRopa(prenda:string):Array<string>{
        this.coleccion_ropa.push(prenda);
        return this.getColeccion();
    }

    getColeccion(){
        return this.coleccion_ropa;
    }

    deleteRopa(index:number){
        this.coleccion_ropa.splice(index,1);
    }
}