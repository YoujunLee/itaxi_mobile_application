import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@IonicPage()
@Component({
  selector: 'page-make-room',
  templateUrl: 'make-room.html',
  providers: [ DatePicker ]
})
export class MakeRoom {

date: any;
time: any;
start: string;
arrive: string;
population: number;
type: string="taxi";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public datePicker: DatePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeRoom');
  }

  submit(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
      start: this.start,
      arrive: this.arrive,
      date: this.date,
      time: this.time,
      population: this.population
    };

    let data=JSON.stringify(body);
    console.log(body);
    this.http.post('/api/make_room.php', data,headers)
    .map(res=>res.json())
      .subscribe(res=>{
        console.log(JSON.stringify(body));
        console.log(res);
      });
  } 
}
