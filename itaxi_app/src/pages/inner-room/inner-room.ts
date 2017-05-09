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
  post_id:any;
  start:string
  arrive:string;
  date:string;
  time:string;

  stu_id= 21101002;
  name =  "이유준";
  cellphone	= "010-4408-4262";
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.post_id=navParams.get("post_id")
    console.log(this.post_id);

   this.http.get('/api/itaxi_room.php'+'?'+this.post_id).map(res => res.json()).subscribe(data => {
        this.start = data[2].start;
        this.arrive=data[2].arrive;
        this.date=data[2].date;
        this.time=data[2].time;
     });
    }
  /*
    this.http.get('/api/itaxi_room.php'+'?'+this.post_id)
    .subscribe(
    result => {
      this.items=result;
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
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerRoom');
  }

}
