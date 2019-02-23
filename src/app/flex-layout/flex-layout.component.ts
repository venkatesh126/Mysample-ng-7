import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.less']
})
export class FlexLayoutComponent implements OnInit {
form:FormGroup;

  constructor(public formbuilder:FormBuilder) { }

  ngOnInit() {
    this.form=this.formbuilder.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })
  }


}
