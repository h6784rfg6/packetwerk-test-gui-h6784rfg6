import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DataService} from '../../interfaces/data.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:Object[];

  constructor(private dataService:DataService, private route:ActivatedRoute, private router:Router) {
    this.users = this.dataService.getUsers();
  }

  returnToPreviousState() {
    this.router.navigate(['../users'], {relativeTo: this.route});
  }
}
