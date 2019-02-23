import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { ContentProjectionComponent } from '../content-projection/content-projection.component';
import { DateViewerComponent } from 'src/app/date-viewer/date-viewer.component';
import { FormValidataionsComponent } from 'src/app/form-validataions/form-validataions.component';
import { FormsModule ,NgForm} from '@angular/forms'; 
import { MyDirectiveDirective } from 'src/app/my-directive.directive';
import { MypipePipe } from 'src/app/pipes/mypipe.pipe';



@NgModule({
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  declarations: [HomeComponent,ChildComponent,ContentProjectionComponent,DateViewerComponent,FormValidataionsComponent,MyDirectiveDirective,MypipePipe],
})
export class HomeModule { }
