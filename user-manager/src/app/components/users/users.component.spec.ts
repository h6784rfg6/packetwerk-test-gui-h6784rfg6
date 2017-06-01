import { TestBed, async } from '@angular/core/testing';
import {UsersComponent} from './users.component';
import {UserActionsComponent} from './grid/user.actions.component';
import {AgGridModule} from 'ag-grid-angular/main';
import {UserService} from '../../interfaces/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {routerConfig} from '../../routing/router.config';
import {UserComponent} from '../user/user.component';
import {AlbumComponent} from '../album/album.component';
import { ModalModule } from 'ngx-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
import {DataService} from '../../interfaces/data.service';
import { By } from '@angular/platform-browser';

describe('UsersComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents(
          [UserActionsComponent]
        ),
        HttpModule,
        RouterModule.forRoot(routerConfig),
        ModalModule.forRoot()
      ],
      declarations: [
        UsersComponent, UserActionsComponent, UserComponent, AlbumComponent
      ],
      providers: [{provide: UserService, useClass: UserService}, {provide: APP_BASE_HREF, useValue: '/'}, DataService]
    });
    TestBed.compileComponents();
  });

  it('should render user table', async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    let users_grid = fixture.debugElement.query(By.css('.users-grid'));
    expect(users_grid).not.toBeNull();
  }));
});
