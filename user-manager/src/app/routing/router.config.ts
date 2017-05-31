import {Routes} from '@angular/router';
import {UsersComponent} from '../components/users/users.component';
import {UserComponent} from '../components/user/user.component';
import {PhotosComponent} from '../components/photos/photos.component';
import {AlbumComponent} from '../components/album/album.component';
import {AlbumsComponent} from '../components/albums/albums.component';

export const routerConfig: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'users/user',
    component: UserComponent
  }, {
    path: 'users/user/albums',
    component: AlbumsComponent
  }, {
    path: 'users/user/albums/album',
    component: AlbumComponent
  }, {
    path: 'users/user/photos',
    component: PhotosComponent
  }, {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];
