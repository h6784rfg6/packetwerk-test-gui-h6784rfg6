import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routerConfig } from './routing/router.config';
import { RouterModule } from '@angular/router';
import {AgGridModule} from 'ag-grid-angular/main';
import { ModalModule } from 'ngx-bootstrap';
import {UserActionsComponent} from './components/users/grid/user.actions.component';
import {AlbumComponent} from './components/album/album.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import { APP_BASE_HREF } from '@angular/common';
import {UserService} from "./interfaces/user.service";
import {DataService} from "./interfaces/data.service";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, UserComponent, UsersComponent, AlbumComponent, UserActionsComponent
      ],
      imports: [
        HttpModule,
        RouterModule.forRoot(routerConfig),
        AgGridModule.withComponents(
          [UserActionsComponent]
        ),
        ModalModule.forRoot()
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService, DataService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
