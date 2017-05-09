import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the InnerRoom page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inner-room',
  templateUrl: 'inner-room.html',
})
export class InnerRoom {
  i;
  post_id:any;
  start:string
  arrive:string;
  date:string;
  time:string;
  items:any;
  fakeArray;
  stu_id= 21101002;
  name =  "이유준";
  cellphone	= "010-4408-4262";
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.post_id=navParams.get("post_id")
    console.log(this.post_id);

    this.http.get('http://itaxi.handong.edu/api/get_room_info.php'+'?'+this.post_id).map(res => res.json()).subscribe(
    result => {
      this.start=result[0].start;
      this.arrive=result[0].arrive;
      this.date=result[0].date;
      this.time=result[0].time;

      this.items=result;
      this.fakeArray = new Array(result.length-1);
      console.log(result.length);
      console.log(this.items[0].start);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}
 /* 
   this.http.get('/api/get_room_info.php').subscribe(data => {
        this.items=data;
       
        console.log(this.post_id);

        console.log(this.items);
     });
    }*/
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerRoom');
  }

}
