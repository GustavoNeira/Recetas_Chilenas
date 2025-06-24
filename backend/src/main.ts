import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //configurar cors
  app.enableCors();
  //configurar prefijo global
  app.setGlobalPrefix('api/v1')
await app.listen(process.env.PUERTO_SERVER || 3000);
}
bootstrap();
