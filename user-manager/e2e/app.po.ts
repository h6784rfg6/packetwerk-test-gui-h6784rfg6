import { browser, element, by } from 'protractor';

export class UserManagerPage {
  navigateToUsers() {
    return browser.get('/users');
  }

  getFirstUser() {
    return element(by.css('#details-user1'));
  }

  getAddress() {
    return element(by.css('.address-card'));
  }

  getAlbums() {
    return element(by.css('.albums-card'));
  }

  getFirstAlbum() {
    return element.all(by.css('.album')).first();
  }

  getPhotos() {
    return element.all(by.css('.photo'));
  }

  getBodyClass() {
    return element(by.css('body.modal-open'));
  }
}
