import { Component } from '@angular/core';
import {UserService} from '../../interfaces/user.service';
import {GridOptions} from 'ag-grid';
import {UserActionsComponent} from './grid/user.actions.component'
import {DataService} from '../../interfaces/data.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Object[];
  error: string;
  private gridOptions: GridOptions;

  constructor(private userService:UserService, private dataService:DataService) {
    this.gridOptions = {};
    this.gridOptions.columnDefs = [{
        headerName: "Name",
        field: "name",
        width: 200
      }, {
        headerName: "Username",
        field: "username",
        width: 200
      }, {
        headerName: "Email",
        field: "email",
        width: 250
      }, {
        headerName: "Actions",
        field: "id",
        cellRendererFramework: UserActionsComponent,
        width: 100
      }];
    this.gridOptions.rowHeight = 50;
  }

  ngOnInit(){
    this.userService.getUsers().subscribe(
      (users:any[]) => {
        this.dataService.setUsers(users);
        this.gridOptions.rowData = users;
        this.gridOptions.api.setRowData(this.gridOptions.rowData)
      },
      error => {
        this.error = error;
      }
    );
  }
}
