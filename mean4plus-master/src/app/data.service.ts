import {Injectable} from '@angular/core';

import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) {}

  getUsers() {
    console.log(this._http);

    return this._http.get("http://localhost:3001/api/users")
      .map(result => this.result = result.json().data);

  }
  // login(payload): Observable<any> {
  //   let headers = new Headers();
  //   headers.append("Content-Type","application/json");
  //   headers.append("Authorization","Bearer");
  //   return this.post(`${this.apiUrl}/backend/api/login`,payload,headers);
  // }
  postHobby(hobby) {
    console.log(hobby);

    return this._http.post('http://localhost:3001/api/users',hobby).map(res => res.json().data);
  }
}
