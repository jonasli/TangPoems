import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PoetService } from "../../providers/poet-service";
import { PoetDetailPage } from "../poet-detail/poet-detail"
import { IPoet } from "../../models/IPoet";
import { IPoem } from "../../models/IPoem";
import { CordovaAudioTrack, IAudioTrack } from 'ionic-audio';
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

  public poets: any = [];
  matchedpoets: IPoet[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public poetService: PoetService) {
    this.navController = navCtrl;

    this.poetService.getPoets().subscribe(data => {
      this.poets = data;;
      this.matchedpoets = this.poets;

    });
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorListPage');



  }


  getItems(ev) {


    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.matchedpoets = this.poets.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ) || ( item.pinyin.indexOf(val.toLowerCase())>-1);
      })
    }
    else {
      this.matchedpoets = this.poets;

    }
  }

  viewPoetDetail(event, p: IPoet) {




    this.navController.push(PoetDetailPage, { "poet": p });



  }

}
