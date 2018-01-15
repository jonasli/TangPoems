import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PoetDetailComponent } from '../../components/poet-detail/poet-detail';
import { IPoet } from "../../models/IPoet";
import { IPoem } from "../../models/IPoem";
import { PoetService } from '../../providers/poet-service';
import { ITrackConstraint, CordovaAudioTrack } from 'ionic-audio';

/*
  Generated class for the PoetDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poet-detail',
  templateUrl: 'poet-detail.html'
})
export class PoetDetailPage {
  public poet: IPoet;
  public tracks: ITrackConstraint[];
  //public poems :IPoem[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public poetService: PoetService
  ) {
      this.poet=navParams.get("poet");
      this.tracks=navParams.get("tracks");
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoetDetailPage');
  }



}
