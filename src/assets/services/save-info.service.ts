import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class SaveInfo {
  savaData: any = [];
  constructor(saveData: any = []) {
    this.savaData = saveData;
  }
}
export class SaveInfoService {
  private sendData = new BehaviorSubject<SaveInfo>(null);
  _saveInfo = this.sendData.asObservable();
  constructor() { }

  setData(data: any) {
    let getData = new SaveInfo(data);
    this.sendData.next(getData);
  }
}
