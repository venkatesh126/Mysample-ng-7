import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http/';
import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: Http) { }
  getData() {
    return this.http.get("assets/json/myjson.json").map(res => res.json())
  }
}
