import { LeaguesService } from './service/legues/leagues.service';
import { LeaguesController } from './controllers/leagues/leagues.controller';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, LeaguesController],
  providers: [AppService, LeaguesService],
})
export class AppModule {}
