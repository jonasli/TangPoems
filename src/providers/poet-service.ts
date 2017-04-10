import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IPoet } from '../models/IPoet';
import { IPoem } from '../models/IPoem';
 
const poeturl = "../assets/poets.json"  ;
const poemurl = "../assets/poems_cn.json"  ;
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
    .get(poeturl)
    .map(response=>{
      console.log(response.text());
      return <IPoet[]>response.json().poets;
    })
    
   

  }

   getPoems(name:string) : Observable<IPoem[]>{
      return this.http
          .get(poemurl)
          .map(response=>{
            console.log(response.text());
            let poems= <IPoem[]>response.json().poems;
            return poems.filter(item=>item.name==name);
          })
      
    }

}
