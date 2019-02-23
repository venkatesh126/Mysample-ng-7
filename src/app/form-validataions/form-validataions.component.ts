import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SaveInfoService } from 'src/assets/services/save-info.service';

@Component({
  selector: 'app-form-validataions',
  templateUrl: './form-validataions.component.html',
  styleUrls: ['./form-validataions.component.less']
})
export class FormValidataionsComponent implements OnInit {

  constructor(public saveServ?:SaveInfoService) { }

  ngOnInit() {
  }

  // 1. Template Driven-- 
  //2. Model Driven -- Form BUilder ForGm

  model: any = {};

  onSubmit() {
    console.log(JSON.stringify(this.model), "on submitttt");
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.saveServ.setData(JSON.stringify(this.model));
  }

}
