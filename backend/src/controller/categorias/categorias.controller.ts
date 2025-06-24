import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CategoriasService } from 'src/servicios/categorias.service';

@Controller('categorias')
export class CategoriasController {

    constructor(private categoriaService:CategoriasService) {}



    @Get()
    @HttpCode(HttpStatus.OK)
    index(){
        return this.categoriaService.getCategorias();
    }
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params){
        return this.categoriaService.getCategoria(parseInt(params.id));
    }
        
}
