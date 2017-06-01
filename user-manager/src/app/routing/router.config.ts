import {Routes} from '@angular/router';
import {UsersComponent} from '../components/users/users.component';
import {UserComponent} from '../components/user/user.component';
import {AlbumComponent} from '../components/album/album.component';

export const routerConfig: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'users/user',
    component: UserComponent
  }, {
    path: 'users/user/album',
    component: AlbumComponent
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
