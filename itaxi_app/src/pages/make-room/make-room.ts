import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';

@IonicPage()
@Component({
  selector: 'page-make-room',
  templateUrl: 'make-room.html',
  providers: [ DatePicker ]
})
export class MakeRoom {
today;
  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker) {
     this.datePicker.onDateSelected.subscribe( 
      (date) => {
        console.log(date);
    });

     this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeRoom');
  }

  type: string="taxi";


  showCalendar(){
    this.datePicker.showCalendar();
  }
}
