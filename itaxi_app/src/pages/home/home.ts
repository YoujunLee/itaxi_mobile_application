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
 post_id: any;
 start: string;
 arrive: string;
 date: string;
 time: string;
 
 items: any;
 items_count: any;
 post_arrs: any;
 post_counts: any;
 i:number;

 stu_id= 21101003;
 name =  "이선문";
 cellphone	= "010-4308-4262";
 
 constructor(public navCtrl: NavController, public http : Http, public loadingCtrl:LoadingController, public httpProvider:GetRoom) {
  
  }
 ionViewWillEnter() {this.getdata();}
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
  }
  
  participate(){
    confirm("탑승하시겠습니까? *출발 10분전 취소 불가");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
      post_id: this.post_id,
      stu_id: this.stu_id,
      name: this.name,
      cellphone: this.cellphone,
      start: this.start,
      arrive: this.arrive,
      date: this.date,
      time: this.time
    };

    let data=JSON.stringify(body);
    console.log(body);
    this.http.post('http://itaxi.handong.edu/api/participate.php', data,headers)
    .map(res=>res.json())
      .subscribe(res=>{
        console.log(JSON.stringify(body));
        console.log(res);
      });
  }

  room(){
    this.navCtrl.push(InnerRoom,{post_id:this.post_id});
  }
}
