import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './routing/router.config';
import {UserComponent} from "./components/user/user.component";
import {UsersComponent} from "./components/users/users.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumComponent} from "./components/album/album.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {UserService} from "./interfaces/user.service";

@NgModule({
  declarations: [
    AppComponent, UserComponent, UsersComponent, AlbumsComponent, AlbumComponent, PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
