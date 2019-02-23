import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FlexLayoutModule } from './flex-layout/flex-layout.module';

import { RouterModule } from '@angular/router';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { SubChild1Component } from './child-routes/sub-child1/sub-child1.component';
import { SubChild2Component } from './child-routes/sub-child2/sub-child2.component'; 
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { MyComponentComponent } from './my-component/my-component.component';
import { VenkatComponent } from './venkat/venkat.component';
// import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
// import { ReadMoreComponent } from './read-more/read-more.component';
// import { FilterTextPipe } from './filter-text.pipe';
// import { TablePipe } from './pipes/table.pipe';  
  
@NgModule({
  declarations: [
    AppComponent,
    ChildRoutesComponent,
    SubChild1Component,
    SubChild2Component,
    MyComponentComponent,
    VenkatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    HomeModule,FlexLayoutModule,FormsModule,HttpModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
