import { Module } from '@nestjs/common';

import { EjemploController } from './controller/ejemplo/ejemplo.controller';
import { EjemploService } from './servicios/ejemplo.service';
import { UploadController } from './controller/upload/upload.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { CategoriasService } from './servicios/categorias.service';
import { CategoriasController } from './controller/categorias/categorias.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
     ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
     })
  ],
  controllers: [EjemploController, UploadController, CategoriasController],
  providers: [EjemploService, CategoriasService],
})
export class AppModule {}
