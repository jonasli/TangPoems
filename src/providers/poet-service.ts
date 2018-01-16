import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPoet } from '../models/IPoet';
import { IPoem } from '../models/IPoem';
import { CacheService } from 'ionic-cache';


const poeturl = "../assets/poets.json";
const poemurl = "../assets/poems_cn.json";
/*
  Generated class for the PoetService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PoetService {

    private poems: IPoem[];
    private poets: IPoet[];
    private _cache: CacheService;

    constructor(public http: HttpClient,
        public cache: CacheService
    ) {
        console.log('Hello PoetService Provider');
        this.poets = [];
        this.getPoems().subscribe(data => { });
    }



    getPoets(): IPoet[] {
        return this.poets;

    }



    getPoet(name: string): IPoet {
        return this.poets
            .filter((p: IPoet) => p.name === name)[0];
    }

    getPoem(name: string): Observable<IPoem[]> {
        return this.http
            .get(poemurl)
            .map(response => {

                return response['poems'].filter(item => item.name == name);

            })

    }

    getPoems(): Observable<IPoem[]> {
        return this.http
            .get(poemurl)
            .map(response => {
                this.poems = response['poems'];

                for (let item of this.poems) {
                    if (this.poets.filter(i => { return i.name == item.author; }).length <= 0) {
                        this.poets.push({
                            name: item.author,
                            image: "/assets/images/" + item.author + ".jpg",
                            bio: "",
                            poems: [item.name]
                        })
                    }
                    else {
                        this.poets.filter(i => { return i.name == item.author; })[0].poems.push(item.name);

                    }
                }
                return response['poems'];
            });;

    }

    getPoemsByPoet(poet: IPoet): Observable<IPoem[]> {
        return this.http
            .get(poemurl)
            .map(response => {
                return response['poems']
                    .filter(item => item.author == poet.name)
                    ;
            });

    }

}
