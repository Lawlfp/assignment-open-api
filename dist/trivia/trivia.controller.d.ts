import { TriviaService } from './trivia.service';
export declare class TriviaController {
    private readonly triviaService;
    constructor(triviaService: TriviaService);
    getTrivia(amount: number, difficulty: string): Promise<any>;
}
