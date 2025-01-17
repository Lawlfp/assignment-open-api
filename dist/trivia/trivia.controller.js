"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriviaController = void 0;
const common_1 = require("@nestjs/common");
const trivia_service_1 = require("./trivia.service");
let TriviaController = class TriviaController {
    constructor(triviaService) {
        this.triviaService = triviaService;
    }
    async getTrivia(amount, difficulty) {
        return this.triviaService.getTriviaQuestion(amount, difficulty);
    }
};
exports.TriviaController = TriviaController;
__decorate([
    (0, common_1.Get)('question'),
    __param(0, (0, common_1.Query)('amount')),
    __param(1, (0, common_1.Query)('difficulty')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TriviaController.prototype, "getTrivia", null);
exports.TriviaController = TriviaController = __decorate([
    (0, common_1.Controller)('trivia'),
    __metadata("design:paramtypes", [trivia_service_1.TriviaService])
], TriviaController);
//# sourceMappingURL=trivia.controller.js.map