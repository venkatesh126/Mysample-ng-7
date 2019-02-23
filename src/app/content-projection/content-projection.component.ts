import { Component, OnInit, Input, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.less']
})
export class ContentProjectionComponent implements OnInit, AfterViewInit {

  today = new Date().toDateString(); 
  @Input() header: string = "";
  @Input() id: string = "";
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
     
  }

}
