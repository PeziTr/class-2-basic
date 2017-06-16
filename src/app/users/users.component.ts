import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-users]',
  // selector: '.app-users',
  selector: 'app-users',
  // template: `
  //   <app-user></app-user>
  //   <app-user></app-user>`,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = 'No suer was created!';
  userName = 'Testuser';
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateUser() {
    this.userCreationStatus = 'User was created! Name is ' + this.userName;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
