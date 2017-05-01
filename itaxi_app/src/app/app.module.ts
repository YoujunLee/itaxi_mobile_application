import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyPage } from '../pages/my-page/my-page';
import { MakeRoom } from '../pages/make-room/make-room';

import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';

@NgModule({
  declarations: [MyApp, HomePage, TabsPage, MyPage, MakeRoom, DatePicker],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp, HomePage, TabsPage, MyPage, MakeRoom, DatePicker],
  providers: [ StatusBar, SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
