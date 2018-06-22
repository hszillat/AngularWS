import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userList: User[];

  selectedUser: User;

  constructor() {}

  ngOnInit() {
    console.log(this.userList);
  }

  setAsSelected(user: User) {
    this.selectedUser = user;
  }
}
