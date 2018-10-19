import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardStore } from '../../store/dashboard-store';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay = ['doc_id', 'name', 'status','preview_url'];
  list = [];
  constructor(private dashStore : DashboardStore) {

  }

  removeRow(list,row){
    list.documents.forEach((element,index) => {
      if(element.doc_id == row.doc_id){
        list.documents.splice(index,1);
      }
    });
    list.dataSource = new MatTableDataSource(list.documents);
    this.setDataSource();
  }
  private setDataSource(){
    setTimeout(() => {
      this.list.forEach(element => {
        element.dataSource.sort = this.sort;
        element.dataSource.paginator = this.paginator;
      });
    });
    console.log(this.list);
  }
  ngAfterViewInit() {
    this.setDataSource();
  }
  ngOnInit() {
    this.dashStore.todos.subscribe(z=>{
      this.list = z;
      this.list.forEach(element => {
        element['dataSource'] = new MatTableDataSource(element.documents);
      });
    })
  }

}
