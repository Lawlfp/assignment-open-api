import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TriviaService {
    private triviaApiUrl = 'https://opentdb.com/api.php';

    async getTriviaQuestion(amount = 1, difficulty = 'easy') {
        try {
            const { data } = await axios.get(this.triviaApiUrl, {
                params: { amount, difficulty },
            });
            return data.results;
        } catch (error) {
            throw new Error(`Failed to fetch trivia question: ${error.message}`);
        }
    }
}
