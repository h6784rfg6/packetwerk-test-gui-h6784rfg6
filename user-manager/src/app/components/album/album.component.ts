import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../interfaces/user.service';
import {Location} from '@angular/common';

@Component({
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  private sub:any;
  private photos:any[];
  error:any;
  selectedPhoto: any;

  constructor(private userService:UserService, private route:ActivatedRoute, private curLocation:Location) { }

  returnToPreviousState() {
    this.curLocation.back();
  }

  ngOnInit() {
    var albumId:number;

    this.sub = this.route.params.subscribe(params => {
      albumId = +params['albumId'];
    });

    this.userService.getPhotos(albumId).subscribe(
      (photos:any[]) => {
        this.photos = photos;
      },
      error => {
        this.error = error;
      }
    );
  }

  setPhoto(photo:any) {
    this.selectedPhoto = photo;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
