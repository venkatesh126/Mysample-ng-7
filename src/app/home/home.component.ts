import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList, ContentChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DateViewerComponent } from 'src/app/date-viewer/date-viewer.component';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../assets/services/config.service';
import { SaveInfoService } from 'src/assets/services/save-info.service';


@Component({
  selector: 'app-home',//Element selector 
  // selector:'.app-home',// Class selector
  // selector:'[app-home]'// property selector
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [ConfigService, SaveInfoService]
})
export class HomeComponent implements OnInit, AfterViewInit, AfterContentInit {
  id: number;
  ueserName: string = "venkatesh";
  /* -- @ViewChild('childcontent') childcontent:ElementRef;  */
  /* -- @ViewChild(ChildComponent) childdateRef: ChildComponent;  */
  /* -- While displaying html content using Input decorator should problematic instead of input we used content projectin... like <ng-content></ng-content> */
  // @ViewChildren(ChildComponent) childdateRef:QueryList<ChildComponent>;// Query list returns list of parameters
  @ContentChild(DateViewerComponent) contentchildDateRef: DateViewerComponent;
  constructor(public activatedRoute: ActivatedRoute, private config?: ConfigService, private saveConfig?: SaveInfoService) { }
  formData: any = [];
  name: string = "my name is gange";

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params['id'];//getting params  asynchronusly
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    })
    this.saveConfig._saveInfo.subscribe(data => {
      console.log(data, "data is empty");
      this.formData = data;
    })
    let dateval = new Date().getFullYear();
    console.log(dateval, "component dateeee");
  }
  ngAfterViewInit() {
    this.config.loadData('sections-info').subscribe(data => {
      console.log(data, "dataat form jsonss");
    })
    // console.log(this.childcontentRef, "child contnnnnt");
    // setInterval(() => {
    //   this.childdateRef.today = new Date();
    // }, 1000)
    // console.log(this.childdateRef.toArray());
    // this.childdateRef.toArray().forEach(element => {
    //  setInterval(()=>{
    //     element.today=new Date();
    //  },1000)
    // });
  }
  ngAfterContentInit() {
    console.log(this.contentchildDateRef, "child contnnnnt");
  }

}
