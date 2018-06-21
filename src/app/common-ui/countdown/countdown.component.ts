import { Component, OnInit, OnDestroy } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  reset() {
    this.stopInterval();

    this.counter = 0;

    this.startInterval();
  }

  private startInterval() {
    this.stopInterval();

    this.intervalId = window.setInterval(() => {
      this.counter += 10;
      this.width = this.initialWidth - this.counter;
      console.log(this.counter);

      if (this.counter > this.initialWidth) {
        this.stopInterval();
      }
    }, 1000);
  }

  private stopInterval() {
    if (!!this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
