import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Potate } from './potate.entity';
import { PotatesController } from './potates.controller';
import { PotatesService } from './potates.service';

@Module({
    controllers: [PotatesController], 
    providers: [PotatesService],
    imports: [TypeOrmModule.forFeature([Potate])]
})
export class PotatesModule {}
