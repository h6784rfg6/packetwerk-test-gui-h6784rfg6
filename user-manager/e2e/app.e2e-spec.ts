import { UserManagerPage } from './app.po';
import {protractor} from "protractor/built/index";
import { browser, element, by } from 'protractor';

describe('user-manager App', () => {
  let page: UserManagerPage;

  beforeEach(() => {
    page = new UserManagerPage();
  });

  it('should navigate to the first album of the first user and open first image', () => {
    page.navigateToUsers();
    let btnProfileDetails = page.getFirstUser();
    expect(btnProfileDetails.isPresent()).toBeTruthy();
    btnProfileDetails.click();

    let addressCard = page.getAddress();
    expect(addressCard.isPresent()).toBeTruthy();

    let albumsCard = page.getAlbums();
    expect(albumsCard.isPresent()).toBeTruthy();

    let album = page.getFirstAlbum();
    album.click();

    let photos = page.getPhotos();
    expect(photos.count()).not.toBe(0);

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(photos.get(0)), 5000);
    photos.get(0).click();

    let body = page.getBodyClass();
    expect(body.isPresent()).toBeTruthy;
  });
});
