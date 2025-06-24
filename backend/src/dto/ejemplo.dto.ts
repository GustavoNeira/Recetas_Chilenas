import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class EjemploDto
{
    @IsNotEmpty({message:"El campo titulo es obligatorio"})
    titulo:string;
    @IsNotEmpty({message:"El campo descripcion es obligatorio"})
    descripcion:string;
    @IsNotEmpty({message:"El campo precio es obligatorio"})
    @IsNumber({},{message:"El campo precio debe ser un numero"})
    precio:number;
    @IsNotEmpty({message:"El campo categoria es obligatorio"})
    @IsNumber({},{message:"El campo categoria debe ser un numero"})
    categoria_id:number;
    @IsNotEmpty({message:"El campo valido es obligatorio"})
    @IsBoolean ({message:"El campo valido debe ser un booleano"})
    valido:boolean;

}