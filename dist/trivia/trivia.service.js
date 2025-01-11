"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriviaService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let TriviaService = class TriviaService {
    constructor() {
        this.triviaApiUrl = 'https://opentdb.com/api.php';
    }
    async getTriviaQuestion(amount = 1, difficulty = 'easy') {
        try {
            const { data } = await axios_1.default.get(this.triviaApiUrl, {
                params: { amount, difficulty },
            });
            return data.results;
        }
        catch (error) {
            throw new Error(`Failed to fetch trivia question: ${error.message}`);
        }
    }
};
exports.TriviaService = TriviaService;
exports.TriviaService = TriviaService = __decorate([
    (0, common_1.Injectable)()
], TriviaService);
//# sourceMappingURL=trivia.service.js.map