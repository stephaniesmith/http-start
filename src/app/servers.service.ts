import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeService(servers: any[]) {
    // return this.http.post('https://udemy-ng-http-alchemy.firebaseio.com/data.json', servers);
    return this.http.put('https://udemy-ng-http-alchemy.firebaseio.com/data.json', servers);
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-alchemy.firebaseio.com/data.json')
      .pipe(map((response: Response) => response
        .json()
        .map(server => {
          server.name = `FETCHED_${server.name}`;
          return server;
        })));
  }
}
