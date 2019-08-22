import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })

export class ConversorPipe implements PipeTransform {
    transform(value:number, por:number) {
        let value_one =  value;
        let value_two =  por;
        return `El resultado es: ${value*por}`
    }
}