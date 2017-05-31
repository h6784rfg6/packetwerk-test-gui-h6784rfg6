import { Component } from '@angular/core';
import {UserService} from "../../interfaces/user.service";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Object[];
  error: string;

  constructor(private userService:UserService) { }

  ngOnInit(){
    this.userService.getUsers().subscribe(
      (users:any[]) => {
        this.users = users;
      },
      error => {
        this.error = error;
      }
    );
  }
}
