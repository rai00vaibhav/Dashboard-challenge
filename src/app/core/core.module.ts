import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule, MatCheckboxModule,MatExpansionModule} from '@angular/material';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardStore } from '../store/dashboard-store';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    CoreRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatToolbarModule
  ],
  providers:[DashboardStore],
  declarations: [DashboardComponent]
})
export class CoreModule { }
