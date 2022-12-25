import { Controller, Get, HttpCode, Post, Param , Body, Patch, Delete, Query} from '@nestjs/common';
import { CreatePotateDto } from './dto/create-potate.dto';
import { UpdatePotateDto } from './dto/update-potate.dto';
import { PotatesService } from './potates.service';

@Controller('potates')
export class PotatesController {

    //private: shorthand para declarar e inicializar o classService na mesma "ocasião"
    //readOnly: boa pratica para indicar que estamos apenas lendo
    //declarando potatesService
    constructor(private readonly potatesService: PotatesService) {}

    @Get()
    @HttpCode(200)
    getPotatoes(@Query() paginationQuery) {
        //const { limit, offset } = paginationQuery;
        return this.potatesService.getPotatos();
    }
    
    @Get(':id')
    @HttpCode(200)
    getPotato(@Param() params) {
        return this.potatesService.getPotato(params.id);
    }

    @Get(':id')
    @HttpCode(200)
    getPotato2(@Param('id') id: string) {
        return this.potatesService.getPotato(id);
    }

    @Post()
    @HttpCode(201)
    createPotato(@Body() createPotateDTo: CreatePotateDto) {
        return this.potatesService.createPotato(createPotateDTo);
    }
    
    @Patch(':id')
    updatePotato(@Param('id') id: string, @Body() updatePotatoDto: UpdatePotateDto ) {
        return this.potatesService.updatePotato(id, updatePotatoDto);
    }

    @Delete(':id')
    deletePotato(@Param('id') id: string ) {
        return this.potatesService.deletePotato(id);
    }
}
