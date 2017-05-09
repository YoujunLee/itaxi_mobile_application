import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { GetRoom } from '../../providers/get-room';
import { InnerRoom } from '../inner-room/inner-room';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GetRoom]
})
export class HomePage {
 items: any;
 loading: any;
 post_id: any=123;
 stu_id= 21101002;
 name =  "이유준";
 cellphone	= "010-4408-4262";

 constructor(public navCtrl: NavController, public http : Http, public loadingCtrl:LoadingController, public httpProvider:GetRoom) {
    this.getdata(); 
  }
  getdata(){
  this.httpProvider.getJsonData().subscribe(
    result => {
      this.items=result;
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

  room(){
    this.navCtrl.push(InnerRoom,{post_id:this.post_id});
  }
}
