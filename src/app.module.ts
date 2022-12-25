import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotatesController } from './potates/potates.controller';
import { PotatoesService } from './potatoes/potatoes.service';

@Module({
  imports: [],
  controllers: [AppController, PotatesController],
  providers: [AppService, PotatoesService],
})
export class AppModule {}
