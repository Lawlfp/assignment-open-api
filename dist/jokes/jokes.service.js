"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let JokesService = class JokesService {
    constructor() {
        this.jokeApiUrl = 'https://v2.jokeapi.dev/joke';
    }
    async getRandomJoke(category = 'Any') {
        try {
            const { data } = await axios_1.default.get(`${this.jokeApiUrl}/${category}`, {
                params: { format: 'json' },
            });
            return data;
        }
        catch (error) {
            throw new Error(`Failed to fetch joke: ${error.message}`);
        }
    }
};
exports.JokesService = JokesService;
exports.JokesService = JokesService = __decorate([
    (0, common_1.Injectable)()
], JokesService);
//# sourceMappingURL=jokes.service.js.map