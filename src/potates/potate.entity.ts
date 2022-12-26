import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Potate { //gambiarra para banco de dados
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;
}