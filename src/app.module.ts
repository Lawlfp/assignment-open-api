import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { TriviaModule } from './trivia/trivia.module';

@Module({
  imports: [JokesModule, TriviaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
