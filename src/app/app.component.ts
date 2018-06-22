import { UserService } from './user/user.service';
import { Component } from '@angular/core';
import { User } from './user/user';
import { of, Observable, fromEvent, Subject } from 'rxjs';
import { filter, map } from 'rxjs/internal/operators';

@Component({
  selector: 'pta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pta';
  myFirstName = 'Holger Szillat';

  list: User[] = [
    { firstname: 'Holger', lastname: 'Szillat', age: 42 },
    { firstname: 'Lukas', lastname: 'Szillat', age: 10 }
  ];

  constructor(public $userService: UserService) {
    // this.initFromEvent();
    // this.initOf();
    // this.initCreate();
    // this.initHot();
  }

  private initOf() {
    const observable: Observable<number> = of(1, 2, 3);
    observable.subscribe(
      next => {
        console.log(next);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Fertig!');
      }
    );
  }

  private initCreate() {
    const observable: Observable<number> = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      setTimeout(() => {
        observer.next(5);
        observer.complete(); // Comment this out!?
      }, 500);

      // observer.error("Hoppla!");
      // observer.complete();
    });

    observable.pipe(filter(value => value % 2 === 0)).subscribe(
      next => {
        console.log(next);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Fertig!');
      }
    );
  }

  private initFromEvent() {
    const observable = fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(map(me => me.clientX))
      .subscribe(n => console.log(n));
  }

  private initHot() {
    const observable: Subject<number> = new Subject<number>();
    observable.next(1);
    observable.next(2);
    observable.subscribe(next => console.log('1st', next));
    observable.next(3);
    observable.next(4);
    observable.subscribe(next => console.log('2nd', next));
    observable.next(5);
    observable.next(6);
    observable.subscribe(next => console.log('3rd', next));
  }
}
