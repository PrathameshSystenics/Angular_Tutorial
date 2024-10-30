import { Injectable } from '@angular/core';

@Injectable({
  // dependency injection
  providedIn: 'root',
})
export class SubscribeService {
  public loginusername: string = '';
  constructor() {}

  // Creating the function inside the servie
  doSubscribe(uname: string) {
    this.loginusername = uname;
    alert('You Have Subscribed');
  }
}
