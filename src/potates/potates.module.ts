import { Module } from '@nestjs/common';
import { PotatesController } from './potates.controller';
import { PotatesService } from './potates.service';

@Module({controllers: [PotatesController], providers: [PotatesService]})
export class PotatesModule {}
