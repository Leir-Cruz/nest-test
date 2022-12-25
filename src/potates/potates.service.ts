import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Potate } from './potate.entity';

//responsável por guardar os dados, relacionados a potatos controller ou ao que precisar 
//para utilziar um provider basta usar o constructor na controller
@Injectable()
export class PotatesService {
     //gambiarra para fingir banco de dados
    private potates: Potate[] = [
        //criando uma potate inicial
        {
            id: 1,
            price: 10.0
        },
    ];

    getPotatos() {
        return this.potates;
    }

    getPotato(id: string) {
        const potate = this.potates.find(item => item.id === +id);
        if(!potate) {
            //throw new HttpException(`Potate ${id} not fount`, HttpStatus.NOT_FOUND);
            throw new NotFoundException(`Potate ${id} not fount`);
        }
        else {
            return potate;
        }
    }

    createPotato(createPotatoDto: any) {
        this.potates.push(createPotatoDto);
    }

    updatePotato(id: string, updatePotatoDto: any) {
        const existingPotate = this.getPotato(id);
        if (existingPotate) {
            //updates potate
        }
    }

    deletePotato(id: string) {
        const potatoIndex = this.potates.findIndex(item => item.id === +id);
        if (potatoIndex => 0) {
            this.potates.slice(potatoIndex, 1);
        }
    }

}
