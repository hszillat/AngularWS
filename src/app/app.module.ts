import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeDE from '@angular/common/locales/de';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import { UserModule } from './user/user.module';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDE);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonUiModule, UserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
