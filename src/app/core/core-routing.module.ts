import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  { 
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full' 
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class CoreRoutingModule { }
