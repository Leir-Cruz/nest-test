import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotatesModule } from './potates/potates.module';

@Module({
  imports: [PotatesModule],
  controllers: [AppController],
  providers: [AppService], //pode injetar dependencias, objetos podendo ter relações entre eles;
})
export class AppModule {}
