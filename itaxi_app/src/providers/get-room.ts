import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetRoom provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GetRoom {

  constructor(public http: Http) {}

  getJsonData(){
  return this.http.get('/api/itaxi_room.php').map(res => res.json());
}

}
