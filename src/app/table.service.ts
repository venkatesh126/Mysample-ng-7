import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
// import {throw,catch } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http?: Http) { }
  loadData(url) {
    return this.http.get("assets/jsons/" + url + ".json").map(res => res.json()
    ).catch((error) => {
      console.log(error.statusText, "error");
      return Observable.throw(error);
    })
  }
  getXml() {
    return this.http.get("assets/jsons/interface_messages_xml_1" + ".xml").map(res => res.text())
  }
}
