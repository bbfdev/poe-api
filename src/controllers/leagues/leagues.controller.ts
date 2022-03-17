import { LeaguesService } from './../../service/legues/leagues.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class LeaguesController {
  constructor(private readonly leagueService: LeaguesService) {}

  @Get()
  public async findAll() {
    const response = await this.leagueService.findAll();

    response.subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.response.data);
      },
    );
    return response;
  }
}
