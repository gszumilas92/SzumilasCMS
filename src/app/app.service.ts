import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Components } from './components';


@Injectable()
export class AppService {
  
  private headers = new Headers({'Content-Type':'application/json'})

  constructor(private http: Http) { }

  getDataFromApi():Promise<Components[]> {
    return this.http.get('/api/contents/string').toPromise().then(response => response.json() as Components[])
  }
  
}
