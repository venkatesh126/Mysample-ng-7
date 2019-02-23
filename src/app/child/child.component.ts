import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  today:Date=new Date();
  @Input() ganga:string;
  // today=new Date().toDateString();
  constructor() { }

  ngOnInit() {
    console.log(this.ganga,"data from parent");
  }

}
