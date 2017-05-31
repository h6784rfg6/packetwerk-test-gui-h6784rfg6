import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DataService} from '../../interfaces/data.service';
import {UserService} from '../../interfaces/user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:Object[];
  user:any = {};
  error:any;
  private sub:any;

  constructor(private userService:UserService, private dataService:DataService, private route:ActivatedRoute, private router:Router) {
    this.users = this.dataService.getUsers();
  }

  returnToPreviousState() {
    this.router.navigate(['../users'], {relativeTo: this.route});
  }

  ngOnInit() {
    var userId: number;

    this.sub = this.route.params.subscribe(params => {
      userId = +params['id'];
    });

    if (!this.users) {
      // load users one more time
      this.userService.getUser(userId.toString()).subscribe(
        (users:any[]) => {
          this.user = users[0];
        },
        error => {
          this.error = error;
        }
      );
    } else {
      this.user = this.users.filter(user => {
        return user["id"] === userId;
      })[0];
      console.log(this.user);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
