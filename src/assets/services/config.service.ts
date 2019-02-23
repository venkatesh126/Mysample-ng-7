import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/Operator/map'
@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(private http: Http) { }
  loadData(data) {
    let url = "/assets/jsons/" + data + ".json"
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
 
}
