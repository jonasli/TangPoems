import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
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

  getPoets() : Observable<IPoet[]>{
    return this.http
    .get (poeturl)
    .map(response=>{
        return response['poets'];
    });
     
  }

  /*getPoet(name:string ) :  Observable<IPoet[]> {
      return this.getPoets()
      .filter((p:IPoet) => p.name ===name);
  }*/

   getPoem(name:string) : Observable<IPoem[]>{
      return this.http
          .get(poemurl)
          .map(response=>{
          
             return response['poems'].filter(item=>item.name==name);
             
          })
      
    }

    getPoems() : Observable<IPoem[]>{
      return this.http
          .get (poemurl)
          .map(response=>{
            return response['poems'];
        });;
          
    }

    getPoemsByPoet(poet: IPoet) : Observable<IPoem[]>{
      return this.http
          .get (poemurl)
          .map(response=>{
            return response['poems'].filter(item=>item.author==poet.name);
        });
          
    }

}
