import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Used } from '../used/used';
import { MadeIn } from '../made-in/made-in';

/**
 * Generated class for the MyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-page',
  templateUrl: 'my-page.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

  used=Used;
  madeIn=MadeIn;

  open_page(page){
  this.navCtrl.push(page);
  }
  
}
