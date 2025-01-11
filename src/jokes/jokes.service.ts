import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class JokesService {
    private jokeApiUrl = 'https://v2.jokeapi.dev/joke';

    async getRandomJoke(category: string = 'Any') {
        try {
            const { data } = await axios.get(`${this.jokeApiUrl}/${category}`, {
                params: { format: 'json' },
            });
            return data;
        } catch (error) {
            throw new Error(`Failed to fetch joke: ${error.message}`);
        }
    }
}
