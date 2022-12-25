import { IsNumber } from "class-validator";

export class CreatePotateDto {

    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly price: number;

}