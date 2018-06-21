import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'pta-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalId: number | undefined;
  private counter = 0;

  readonly initialWidth = 100;
  width = this.initialWidth;

  @ViewChild('balken') balken: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.counter += 10;
      this.width = this.initialWidth - this.counter;
      console.log(this.counter);

      if (this.counter > this.initialWidth) {
        this.balken.nativeElement.style.width = '100%';
        this.balken.nativeElement.style.backgroundColor = 'red';

        this.stopInterval();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  private stopInterval() {
    if (!!this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
