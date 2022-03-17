import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { urlConfig } from '../../conf/url.conf';

@Injectable()
export class LeaguesService {
  constructor(private httpService: HttpService) {}

  public findAll(): Observable<AxiosResponse<any[]>> {
    const options = {
      headers: {
        'User-Agent':
          'OAuth learning/1.0.0 (contact: furukawaborgesbruno@gmail.com) StrictMode',
        'X-Rate-Limit-Policy': 'ladder-view',
        'X-Rate-Limit-Rules': 'client',
        'X-Rate-Limit-Client': '10:5:10',
        'X-Rate-Limit-Client-State': '1:5:0',
      },
    };

    return this.httpService.get(`${urlConfig.urlLeague}`, options);
  }
}
