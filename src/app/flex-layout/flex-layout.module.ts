import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutComponent } from './flex-layout.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,RouterModule
  ],
  declarations: [FlexLayoutComponent]
})
export class FlexLayoutModule { }
