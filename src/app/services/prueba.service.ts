import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
