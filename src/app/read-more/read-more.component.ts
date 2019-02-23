import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  template: `<div [class.collapsed]="isCollapsed">
  <ng-content></ng-content>
</div>
<div (click)="isCollapsed = !isCollapsed" style="background:#eee;text-align:center">Read {{isCollapsed? 'more':'less'}}</div>

 `,
  styleUrls: ['./read-more.component.less']
})
export class ReadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isCollapsed: boolean = true;
}
