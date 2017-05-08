import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { GetRoom } from '../../providers/get-room';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GetRoom]
})
export class HomePage {
 items: any;
 loading: any;
  constructor(public navCtrl: NavController, public http : Http, public loadingCtrl:LoadingController, public httpProvider:GetRoom) {
    this.getdata();
  }
  getdata(){
  this.httpProvider.getJsonData().subscribe(
    result => {
      this.items=result;
      console.log("Success : "+this.items);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}
}
