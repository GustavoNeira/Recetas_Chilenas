import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

export class UploadFileDto {
  producto_id: number;
}

@Controller('uploads')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './assets/uploads',
        filename: (req, file, callback) => {
          callback(null, `${Date.now()}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: 4 * 1024 * 1024 }, // límite 4MB
      fileFilter: (req, file, callback) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
          return callback(
            new BadRequestException(
              `Tipo de archivo no permitido: ${file.mimetype}`,
            ),
            false,
          );
        }
        callback(null, true); // acepta el archivo
      },
    }),
  )
  async metodoPost(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: UploadFileDto,
  ) {
    return {
      estado: 'ok',
      mensaje: 'Archivo subido',
      nombre: file.originalname,
      archivosubido: file.filename,
      mimetype: file.mimetype,
      producto_id: dto.producto_id,
    };
  }
}

    /*
    @Post()
    @UseInterceptors(FileInterceptor('file', {storage:diskStorage({
        destination:'./assets/uploads',
        filename:(req, file, callback) => {
             callback(null, `${Date.now()}${extname(file.originalname)}`);
        }

    }) })

    )
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return { estado:"ok", mensaje: "Archivo subido", nombre: file.originalname,archivosubido:file.filename,mimetype:file.mimetype }
           
    }
      */

