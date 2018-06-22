import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userList: User[];

  selectedUser: User | undefined = undefined;

  constructor() {}

  ngOnInit() {
    console.log(this.userList);
  }

  setAsSelected(user: User) {
    this.selectedUser = user;
  }

  deleteUser(user: User) {
    const ind = this.userList.indexOf(user);
    if (ind !== -1) {
      this.userList.splice(ind, 1);
      if (this.selectedUser !== undefined) {
        this.selectedUser = undefined;
      }
    }
  }

  reset() {
    this.userList = [
      { firstname: 'Holger', lastname: 'Szillat', age: 42 },
      { firstname: 'Lukas', lastname: 'Szillat', age: 10 }
    ];

    this.selectedUser = undefined;
  }
}
