import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloWorldComponent, CountdownComponent],
  exports: [
    HelloWorldComponent, CountdownComponent
  ]
})
export class CommonUiModule { }
