import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotatesController } from './potates/potates.controller';
import { PotatesService } from './potates/potates.service';

@Module({
  imports: [],
  controllers: [AppController, PotatesController],
  providers: [AppService, PotatesService], //pode injetar dependencias, objetos podendo ter relações entre eles;
})
export class AppModule {}
