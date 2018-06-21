import { UserNameComponent } from './user-name/user-name.component';
import {
  Component,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

@Component({
  selector: 'pta-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
  // encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements AfterViewInit, AfterContentInit {
  /** Transkludierte Elemente */
  @ContentChild(UserNameComponent)
  userName: UserNameComponent;

  /**
   * Elemente aus Vorlage.
   */
  @ViewChild('btn') btn: ElementRef<HTMLButtonElement>;

  @ViewChild(UserAvatarComponent) userAvatar: UserAvatarComponent;

  @ViewChildren(UserAvatarComponent)
  userAvatare: QueryList<UserAvatarComponent>;

  name = 'Holger Szillat';
  onClick() {
    this.name = 'angular rocks';
  }

  ngAfterViewInit(): void {
    console.log(this.userAvatar, this.userAvatare.toArray());
    console.log(this.btn);
  }

  ngAfterContentInit(): void {
    console.log(this.userName);
  }
}
