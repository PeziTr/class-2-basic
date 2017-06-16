import { Component } from '@angular/core';
@Component(
    {
        selector: 'app-user',
        templateUrl: './user.component.html'
    })
export class UserComponent {
  userId: number = 10;
  userStatus: string = 'offline';

  getUserStatus() {
    return this.userStatus;
  }
}
