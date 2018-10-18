import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule, MatCheckboxModule,MatExpansionModule} from '@angular/material';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardStore } from '../store/dashboard-store';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    CoreRoutingModule
  ],
  providers:[DashboardStore],
  declarations: [DashboardComponent]
})
export class CoreModule { }
