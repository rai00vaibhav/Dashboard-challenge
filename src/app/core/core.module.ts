import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    CoreRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class CoreModule { }
