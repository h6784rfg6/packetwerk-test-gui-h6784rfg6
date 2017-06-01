import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './routing/router.config';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {AlbumComponent} from './components/album/album.component';
import {UserService} from './interfaces/user.service';
import {AgGridModule} from 'ag-grid-angular/main';
import {UserActionsComponent} from './components/users/grid/user.actions.component';
import {DataService} from './interfaces/data.service';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UsersComponent, AlbumComponent, UserActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AgGridModule.withComponents(
      [UserActionsComponent]
    ),
    ModalModule.forRoot()
  ],
  providers: [UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
