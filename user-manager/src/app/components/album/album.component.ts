import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../interfaces/user.service';
import {Location} from '@angular/common';

@Component({
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router, private curLocation: Location) {
  }

  returnToPreviousState() {
    this.curLocation.back();
  }
}
