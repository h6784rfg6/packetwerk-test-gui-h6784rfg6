import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
  users: Object[];

  setUsers(users: Object[]) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }
}
