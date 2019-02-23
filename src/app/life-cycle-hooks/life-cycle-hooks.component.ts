import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.less']
})
export class LifeCycleHooksComponent implements OnInit,DoCheck {

  constructor() {
    console.log("constructor is calling");
  }
  ngOnChanges(){
    console.log("on changes is calling..");
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  ngOnInit(): void {
    console.log("oninti is calling..");
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  ngDoCheck(): void {
    console.log("do check is calling");
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }
  // now from component specific

   ngAfterContentInit(): void {
     console.log("after content init is calling");
     //Called after ngOnInit when the component's or directive's content has been initialized.
     //Add 'implements AfterContentInit' to the class.
     
   }
  ngAfterContentChecked(): void {
    console.log("after content checked is calling");
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }
  ngAfterViewInit(): void {
    console.log("after view init is calling");
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }
  ngAfterViewChecked(): void {
    console.log("after view checked is calling");
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }
  ngOnDestroy(): void {
    console.log("on destroy is calling");
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
  }
