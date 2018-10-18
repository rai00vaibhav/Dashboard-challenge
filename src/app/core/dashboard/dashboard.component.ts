import { Component, OnInit } from '@angular/core';
import { DashboardStore } from '../../store/dashboard-store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashStore : DashboardStore) {
   }

  ngOnInit() {

  }

}
