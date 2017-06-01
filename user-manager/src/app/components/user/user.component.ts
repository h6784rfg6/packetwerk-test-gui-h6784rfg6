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
  albums:Object[];
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
    var userId:number;

    this.sub = this.route.params.subscribe(params => {
      userId = +params['userId'];
    });

    if (!this.users) {
      // load user if not present in the service
      this.userService.getUser(userId).subscribe(
        (users:any[]) => {
          this.user = users[0];
          this.getAlbums(this.user["id"]);
        },
        error => {
          this.error = error;
        }
      );
    } else {
      this.user = this.users.filter(user => {
        return user["id"] === userId;
      })[0];
      this.getAlbums(this.user["id"]);
    }
  }

  getAlbums(userId:number) {
    this.userService.getAlbums(userId).subscribe(
      (albums:any[]) => {
        this.albums = albums;
      },
      error => {
        this.error = error;
      }
    );
  };

  openAlbum(album:any) {
    this.router.navigate(['./album', {albumId: album["id"]}], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
