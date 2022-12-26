import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotatesModule } from './potates/potates.module';

@Module({
  imports: [PotatesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',   //username para acessar a database
    password: 'pass123',    //mesma senha do docker-compose file
    database: 'postgres',  //nome que a database levará
    autoLoadEntities: true, //bom para development
    synchronize: true //bom para development
  }),
],
  controllers: [AppController],
  providers: [AppService], //pode injetar dependencias, objetos podendo ter relações entre eles;
})
export class AppModule {}
