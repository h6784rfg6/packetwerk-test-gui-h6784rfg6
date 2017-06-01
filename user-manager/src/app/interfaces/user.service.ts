import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  root = 'http://jsonplaceholder.typicode.com';

  constructor(private http:Http, private router:Router) { }

  getUsers() {
    return this.http.get(this.root + "/users")
      .map((response:Response) => {
        return response.json();
      })
      .catch(UserService.handleError);
  }

  getUser(userId: number) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', userId.toString());

    return this.http.get(this.root + "/users", {search: params})
      .map((response:Response) => {
        return response.json();
      })
      .catch(UserService.handleError);
  }

  getAlbums(userId: number) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userId', userId.toString());

    return this.http.get(this.root + "/albums", {search: params})
      .map((response:Response) => {
        return response.json();
      })
      .catch(UserService.handleError);
  }

  getPhotos(albumId: number) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('albumId', albumId.toString());

      return this.http.get(this.root + "/photos", {search: params})
      .map((response:Response) => {
        return response.json();
      })
      .catch(UserService.handleError);
  }

  private static handleError(error:any):Observable<any> {
    return Observable.throw(error.json().message || 'Server error');
  }
}
