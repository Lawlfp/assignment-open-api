import { Controller, Get, Query } from '@nestjs/common';
import { TriviaService } from './trivia.service';

@Controller('trivia')
export class TriviaController {
    constructor(private readonly triviaService: TriviaService) {}

    @Get('question')
    async getTrivia(@Query('amount') amount: number, @Query('difficulty') difficulty: string) {
        return this.triviaService.getTriviaQuestion(amount, difficulty);
    }
}
