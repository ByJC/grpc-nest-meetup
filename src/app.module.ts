import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { DogController } from './dog/dog.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController, DogController],
  providers: [AppService],
})
export class AppModule {}
