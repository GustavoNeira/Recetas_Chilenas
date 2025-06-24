import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { EjemploDto } from 'src/dto/ejemplo.dto';
import { EjemploInterface } from 'src/interfaces/ejemplo-interface.interface';
import { EjemploService } from 'src/servicios/ejemplo.service';

@Controller('ejemplo')
export class EjemploController {

    constructor(private ejemploService:EjemploService) { 

    }

 @Get()
 @HttpCode(HttpStatus.OK) // se puede cambiar el codigo de respuesta
 @Header('cabezera','destroy.cl') // se puede agregar una cabecera a la respuesta
    index():EjemploInterface{
        return {estado:"ok", mensaje:"Metodo get | servicios | "+this.ejemploService.getTexto("Hola mundo")};
    }
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params){
        return {estado:"ok", mensaje:"Metodo get | id="+params.id};
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe())
    create(@Body() dto:EjemploDto){//contrato
        return {estado:"ok",mensaje:`Metodo post | titulo=${dto.titulo} | descripcion=${dto.descripcion} | precio=${dto.precio} | categoria_id=${dto.categoria_id} | valido=${dto.valido}`}; 
    }
    //@Post()
    //create(@Body() json){
        //return `Metodo post | json=${json.correo} | clave=${json.clave}`;
    //}
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() params){ 
        return {estado:"ok", mensaje:"Metodo PUT | id="+params.id};

    }
    @Delete(':id') 
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params){
        return {estado:"ok", mensaje:"Metodo DELETE | id="+params.id};
        

    }




}
   /*
    @Get()
    index(){
        return "Metodo get";
    }
    @Get(':id')
    show(@Param() params){
        return "Metodo get | id="+params.id;
    }
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() dto:EjemploDto){//contrato
        return `Metodo post | titulo=${dto.titulo} | descripcion=${dto.descripcion} | precio=${dto.precio} | categoria_id=${dto.categoria_id} | valido=${dto.valido}`; ;
    }
    //@Post()
    //create(@Body() json){
        //return `Metodo post | json=${json.correo} | clave=${json.clave}`;
    //}
    @Put(':id')
    update(@Param() params){ 
        return "Metodo put  | id="+params.id;

    }
    @Delete(':id') 
    destroy(@Param() params){
        return "Metodo delete | id="+params.id;
        

    } 
   */
