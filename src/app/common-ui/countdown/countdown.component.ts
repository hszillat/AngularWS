import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pta-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  intervalId: number;
  readonly initialWidth = 100;
  width = this.initialWidth;
  counter = 0;

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
        window.clearInterval(this.intervalId);
      }
    }, 1000);
  }
}
