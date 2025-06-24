import { Injectable } from '@nestjs/common';

@Injectable()
export class EjemploService {
    getTexto(parametro:string):string{
        return "el valor del parametro es:"+parametro+" | test="+process.env.CURSO
    }
}
