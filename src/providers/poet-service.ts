import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
const url = "../assets/poets.json"  ;
/*
  Generated class for the PoetService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PoetService {
  

  constructor(public http: Http) {
    console.log('Hello PoetService Provider');


  }

  getPoets(poet:string) : Observable<IPoet[]>{
    return this.http
    .get(url)
    .map(response=>{
      return <IPoet[]>response.json().poets;
    })
    
    

  }

}
