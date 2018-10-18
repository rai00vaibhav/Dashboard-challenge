import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStore } from './dashboard-store';
import { DashboardService } from '../services/dashboard.service';

@NgModule({
  providers:[
    DashboardService
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StoreModule { }
