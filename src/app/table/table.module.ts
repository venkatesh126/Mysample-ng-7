import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from '../table/table.component';
import { AgePipe } from '../pipes/age.pipe';
import { FormsModule } from '@angular/forms'; 
import { AboutComponent } from 'src/app/about/about.component';
import { TablePipe } from 'src/app/pipes/table.pipe';
import { FilterTextPipe } from 'src/app/filter-text.pipe'; 
import { ReadMoreComponent } from 'src/app/read-more/read-more.component';
import { LifeCycleHooksComponent } from 'src/app/life-cycle-hooks/life-cycle-hooks.component';
 


@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,FormsModule
  ],
  declarations: [TableComponent,AgePipe,AboutComponent,TablePipe,FilterTextPipe,ReadMoreComponent,LifeCycleHooksComponent]
})
export class TableModule { }
