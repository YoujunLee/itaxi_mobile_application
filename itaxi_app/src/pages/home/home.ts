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
 items_count: any;
 post_id: any;
 post_arrs: any;
 post_counts: any;
 i:number;

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
      this.post_arrs=Array(result.length);
      this.post_counts=Array(result.length);

      for(this.i=0; this.i<result.length; this.i++){
        this.post_arrs[this.i]=this.items[this.i].post_id;
        this.getUser(this.i);
      }
      console.log(this.post_arrs);
      console.log(this.post_counts);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}
  
  getUser(j){
     /*참가자 숫자 출력 시작*/
             this.http.get('http://itaxi.handong.edu/api/get_room_info.php'+'?'+this.post_arrs[j]).map(res => res.json()).subscribe(
                result => {
                   this.items_count=result;
                   this.post_counts[j]=this.items_count[1].count;
                  //console.log(this.items_count[1].count);
                },
                err =>{
                  console.error("Error : "+err);
                } ,
                () => {
                }
              );
        /*--------------------------*/
  }


  room(){
    this.navCtrl.push(InnerRoom,{post_id:this.post_id});
  }
}
