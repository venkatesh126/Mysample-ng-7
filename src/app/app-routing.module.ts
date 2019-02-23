import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { ChildComponent } from './child/child.component';
import { ChildRoutesComponent } from 'src/app/child-routes/child-routes.component';
import { SubChild1Component } from 'src/app/child-routes/sub-child1/sub-child1.component';
import { SubChild2Component } from 'src/app/child-routes/sub-child2/sub-child2.component';
import { TableModule } from 'src/app/table/table.module'; 

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "flex", component: FlexLayoutComponent },
  { path: "date", component: ChildComponent },
  {
    path: "sub/:id", component: ChildRoutesComponent,
    children: [
      {
        path: "subchild1", component: SubChild1Component
      },
      {
        path: "subchild2", component: SubChild2Component
      }
    ]
  },
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'table',
    loadChildren: './table/table.module#TableModule'
  },
  // { path: "table", loadChildren: "TableModule"}
  // {
  //   path: 'calendar',
  //   component: CalendarComponent,
  //   children: [
  //     { path: '', redirectTo: 'new', pathMatch: 'full' },
  //     { path: 'all', component: CalendarListComponent },
  //     { path: 'new', component: CalendarEventComponent },
  //     { path: ':id', component: CalendarEventComponent }
  // imports: [RouterModule.forRoot(routes,{useHash:true})],
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
