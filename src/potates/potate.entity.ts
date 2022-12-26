import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Potate { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;
}