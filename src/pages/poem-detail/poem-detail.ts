import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IPoem } from "../../models/IPoem";
import { PoetService } from "../../providers/poet-service";
import { PoemDetailComponent } from '../../components/poem-detail'
/*
  Generated class for the PoemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poem-detail',
  templateUrl: 'poem-detail.html'
})
export class PoemDetailPage {
  public poem: IPoem;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.poem = navParams.get("poem");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemDetailPage');
  }

}
