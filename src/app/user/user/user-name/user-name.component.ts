import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'pta-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {
  @Input() user: User;

  @Output() userSelection: EventEmitter<User> = new EventEmitter<User>();

  @Output() deleteUser: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}

  @HostListener('click', ['$event'])
  private selectThisUser($event: MouseEvent) {
    if ($event.target instanceof HTMLButtonElement) {
      this.deleteUser.emit(this.user);
    } else {
      this.userSelection.emit(this.user);
    }
  }
}
