import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PoetService} from "../../providers/poet-service";

/*
  Generated class for the AuthorList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-author-list',
  templateUrl: 'author-list.html'
})
export class AuthorListPage {

  public poets : any = [];
  
  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public poetService :PoetService) {

        this.poetService.getPoets("Li Bai")
        .subscribe(data => {
          this.poets = data;
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorListPage');
    
    

  }



}
