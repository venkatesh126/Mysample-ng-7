import { Component, OnInit, Input, Output ,EventEmitter,ChangeDetectionStrategy} from '@angular/core'; 

@Component({
  selector: 'app-about',// Element selector
  // selector:'.app-about',// Class selector
  // selector:'[app-about]',// property selector
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class AboutComponent implements OnInit {

  constructor() { }
  userName: string = "Venakt";
  @Input() password: string = "";
  @Input() dates;
  @Output() changeInput = new EventEmitter();
  search: string = "";
  ngOnInit() {
  }
  change() {
    this.changeInput.emit({ val: this.search })
  }

}
