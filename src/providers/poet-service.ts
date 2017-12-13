import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { IPoet, PoetData } from '../models/IPoet';
import { IPoem, PoemData } from '../models/IPoem';


const poeturl = "../assets/poets.json"  ;
const poemurl = "../assets/poems_cn.json"  ;
/*
  Generated class for the PoetService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PoetService {
  

  constructor(public http: HttpClient) {
    console.log('Hello PoetService Provider');


  }

  getPoets() : Observable<PoetData>{
    return this.http
    .get<PoetData>(poeturl);
     
  }

  /*getPoet(name:string ) :  Observable<IPoet[]> {
      return this.getPoets()
      .filter((p:IPoet) => p.name ===name);
  }*/

   getPoem(name:string) : Observable<PoemData>{
      return this.http
          .get<PoemData>(poemurl)
          .map(response=>{
            
            let ps= <IPoem[]>response.poems;
            
            response.poems=ps.filter(item=>item.name==name);
            return response;
          })
      
    }

    getPoems() : Observable<PoemData>{
      return this.http
          .get<PoemData>(poemurl);
          
    }

}
