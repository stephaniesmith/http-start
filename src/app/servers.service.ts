import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeService(servers: any[]) {
    // return this.http.post('https://udemy-ng-http-alchemy.firebaseio.com/data.json', servers);
    return this.http.put('https://udemy-ng-http-alchemy.firebaseio.com/data.json', servers);
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-alchemy.firebaseio.com/data.json');
  }
}
