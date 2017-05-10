import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the Used page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-used',
  templateUrl: 'used.html',
})
export class Used {

  start:string
  arrive:string;
  date:string;
  time:string;
 items: any;
  stu_id= 21101003;
  name =  "이선문";
  cellphone	= "010-4408-4262";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    /*방 정보 가져오기 출발 시간 등*/
    this.http.get('http://itaxi.handong.edu/api/used.php'+'?'+this.stu_id).map(res => res.json()).subscribe(
        result => {
             this.items=result;
          /*
          this.start=result[0].start;
          this.arrive=result[0].arrive;
          this.date=result[0].date;
          this.time=result[0].time;
          */
          console.log(this.items);
        },
        err =>{
          console.error("Error : "+err);
        } ,
        () => {
          console.log('getData completed');
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Used');
  }

}
