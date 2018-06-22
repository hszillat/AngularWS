import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'pta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pta';
  myFirstName = 'Holger Szillat';

  list: User[] = [
    {firstname: 'Holger', lastname: 'Szillat', age: 42},
    {firstname: 'Lukas', lastname: 'Szillat', age: 10},
  ];
}
