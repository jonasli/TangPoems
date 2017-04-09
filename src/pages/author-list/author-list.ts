import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PoetService} from "../../providers/poet-service";
import { PoetDetailPage } from "../poet-detail/poet-detail"
import { IPoet } from "../../models/IPoet";
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
    navController: any;

  public poets : any = [];
  
  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public poetService :PoetService) {
        this.navController = navCtrl;
        this.poetService.getPoets("Li Bai")
        .subscribe(data => {
          this.poets = data;
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorListPage');
    
    

  }

  viewPoetDetail (event, p:IPoet) {
		this.navController.push(PoetDetailPage, {"poet":p });
  }

}
