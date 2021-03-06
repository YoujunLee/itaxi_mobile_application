import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyPage } from '../pages/my-page/my-page';
import { MakeRoom } from '../pages/make-room/make-room';
import { InnerRoom } from '../pages/inner-room/inner-room';
import { Used } from '../pages/used/used';
import { MadeIn } from '../pages/made-in/made-in';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { HttpModule }    from '@angular/http';
import 'rxjs/add/operator/map'

@NgModule({
  declarations: [MyApp, HomePage, TabsPage, MyPage, MakeRoom, InnerRoom, Used, DatePicker, MadeIn],
  imports: [ BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp, HomePage, TabsPage, MyPage, MakeRoom, InnerRoom, Used,  DatePicker, MadeIn],
  providers: [ StatusBar, SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
