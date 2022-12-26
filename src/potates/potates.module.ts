import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Potate } from './potate.entity';
import { PotatesController } from './potates.controller';
import { PotatesService } from './potates.service';

@Module({
    imports: [TypeOrmModule.forFeature([Potate])],
    controllers: [PotatesController], 
    providers: [PotatesService]
})
export class PotatesModule {}
