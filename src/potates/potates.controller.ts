import { Controller, Get, HttpCode, Post, Param , Body, Patch, Delete} from '@nestjs/common';

@Controller('potates')
export class PotatesController {
    @Get()
    @HttpCode(200)
    getPotatoes(): string {
        return 'this action should return all potatoes'
    }
    
    @Get(':id')
    @HttpCode(200)
    getPotato(@Param() params): string {
        return `this should return ${params.id} potato`
    }

    @Get(':id')
    @HttpCode(200)
    getPotato2(@Param('id') id: string) {
        return `this should return ${id} potato`
    }

    @Post()
    @HttpCode(201)
    createPotato(@Body() body): object {
        return {body}
    }
    
    @Patch(':id')
    updatePotato(@Param('id') id: string, @Body() body ): string {
        return `this action updates ${id}`
    }

    @Delete(':id')
    deletePotato(@Param('id') id: string ): string {
        return `this action delete ${id}`
    }
}
