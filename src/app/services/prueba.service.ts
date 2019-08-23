import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class PruebaService {
  public url: string;
  constructor( private _http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return 'Service works';
  }

  getArticulos() {
    return this._http.get(this.url)
  }

}
