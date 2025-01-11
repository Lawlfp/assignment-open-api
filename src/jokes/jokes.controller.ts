import { Controller, Get, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
    constructor(private readonly jokesService: JokesService) {}

    @Get('random')
    async getRandomJoke(@Query('category') category: string) {
        return this.jokesService.getRandomJoke(category);
    }
}
