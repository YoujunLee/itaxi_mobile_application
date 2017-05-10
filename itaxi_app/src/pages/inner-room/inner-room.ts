import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http} from '@angular/http';

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
  stu_id= 21101003;
  name =  "이선문";
  cellphone	= "010-4408-4262";
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public http:Http) {
    this.post_id=navParams.get("post_id")
    console.log(this.post_id);
    
    /*방 정보 가져오기 출발 시간 등*/
    this.http.get('http://itaxi.handong.edu/api/get_room_info.php'+'?'+this.post_id).map(res => res.json()).subscribe(
        result => {
          this.start=result[0].start;
          this.arrive=result[0].arrive;
          this.date=result[0].date;
          this.time=result[0].time;
    
          this.printPPl(result);
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
    console.log('ionViewDidLoad InnerRoom');
  }
  
  printPPl(result){
        this.items=result;  //방 내부 인원 정보 가져오기
        this.fakeArray = new Array(result.length-1);
        console.log(result.length);
        console.log(this.items[0].start);
  }

  /* 방 나가기 */
  delete(){
    let confirm = this.alertCtrl.create({
      title: '방을 나가시겠습니까?',
      message: '',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
        
            let body = {
              post_id: this.post_id,
              stu_id: this.stu_id,
            };
        
            let data=JSON.stringify(body);
            console.log(body);
            this.http.post('http://itaxi.handong.edu/api/delete_participate.php', data,headers)
              .subscribe(res=>{
                console.log(JSON.stringify(body));
                console.log(res);
            });
              this.navCtrl.popTo( this.navCtrl.getByIndex(1));
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
