import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map,finalize,catchError} from "rxjs/operators";
//import 'rxjs/add/operator/map';
//import {Http,Headers,RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  result: any;

  constructor(private _http: HttpClient) {}

  getUsers() {
    console.log(this._http);
    return this._http.get("http://localhost:3001/api/users").pipe(
      map(result => {
        this.result = result
        console.log(this.result);
        return result
      })

    );
  }
  postUsers(obj) {
    console.log(this._http);
    return this._http.post("http://localhost:3001/api/users",obj).pipe(
      map(result => {
        this.result = result
        console.log(this.result);
        return result
      })
    );
  }


  postHobby(hobby) {
    return this._http.post('http://localhost:3001/api/users',hobby).pipe(map(result => {
      this.result = result
      console.log(this.result);
      return result
    })
    )
  }

}
