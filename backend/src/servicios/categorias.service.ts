import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { error } from 'console';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class CategoriasService {


    private prisma:any;
    constructor() {
        this.prisma= new PrismaClient();
    }
    async getCategorias(){
        return await this.prisma.categoria.findMany(
            {
            orderBy:[{id:'desc'}]
            });

    }
    async getCategoria(id:any){
        const categoria = await this.prisma.categoria.findFirst({
            where: {
                id: id
            }
        })
        if (!categoria) {
            throw new HttpException(
                {
                    estado:HttpStatus.BAD_REQUEST,
                    error:"el registro no existe"
                },HttpStatus.BAD_REQUEST,
            );
        }
        else {
            
            return categoria;
        }

    }
}
