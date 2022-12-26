import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Potate } from './potate.entity';

//responsável por guardar os dados, relacionados a potatos controller ou ao que precisar 
//para utilziar um provider basta usar o constructor na controller
@Injectable()
export class PotatesService {
    constructor(
        @InjectRepository(Potate)
        private readonly potateRepository: Repository<Potate>,
    ) {}

    getPotatos() {
        return this.potateRepository.find();
    }

    async getPotato(id: number) {
        const potate = await this.potateRepository.findOneBy({id: id});
        if(!potate) {
            throw new NotFoundException(`Potate ${id} not found`);
        }
        else {
            return potate;
        }
    }

    createPotato(createPotatoDto: any) {
        const potate = this.potateRepository.create(createPotatoDto);
        return this.potateRepository.save(potate); 
    }

    async updatePotato(id: string, updatePotatoDto: any) {
        const existingPotate = await this.potateRepository.preload({
            id: +id,
            ...updatePotatoDto,
        });
        if (!existingPotate) {
            throw new NotFoundException(`Potate ${id} not fount`);
        }
        return this.potateRepository.save(existingPotate); 
    }

    async deletePotato(id: number) {
        const potate = await this.potateRepository.findOneBy({id: id});
        return this.potateRepository.remove(potate)

    }

}
