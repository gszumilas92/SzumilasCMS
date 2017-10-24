import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contents } from './contents';


@Injectable()
export class AppService {
  
  private headers = new Headers({'Content-Type':'application/json'})

  constructor(private http: Http) { }

  getArrayOfDocuments():Promise<Contents[]> {
    return this.http.get('/api/contents/mainContent/paragraph').toPromise().then(response => response.json() as Contents[])
  }
  
}
