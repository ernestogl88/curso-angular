import { Injectable } from '@angular/core';

@Injectable()

export class RopaService {
    public nombre_prenda:string;
    prueba(nombre_prenda){
        return nombre_prenda;
    }
}