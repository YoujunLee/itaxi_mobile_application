import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyPage } from '../my-page/my-page';
import { MakeRoom } from '../make-room/make-room';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) { }
  home = HomePage;
  makeRoom = MakeRoom;
  myPage = MyPage;

   go_register_page(){
  this.navCtrl.push(MakeRoom);
  }

}
