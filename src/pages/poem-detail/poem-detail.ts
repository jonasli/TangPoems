import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IPoem } from "../../models/IPoem";
import { PoetService } from "../../providers/poet-service";
import { PoemDetailComponent } from '../../components/poem-detail/poem-detail'
import { Media, MediaObject } from '@ionic-native/media';
import {Player} from '../../providers/player'
import { IonicAudioModule } from '.3.2.0@ionic-audio';
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
  player:Player;
  playornot:string="play";
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private media: Media
  ) {
    this.poem = navParams.get("poem");
    var url="/assets/audio/("+this.poem.author+")"+ this.poem.name + ".mp3";
    console.debug(url);
    this.player=new Player(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemDetailPage');
  }

  playAudio(){
      // Play the audio file at url
      
/*      const onStatusUpdate = (status) => console.log(status);

      this.media.create(url,onStatusUpdate)
      .then((file:MediaObject)=>{
          console.debug("start play");
          file.play();

      })*/
      if(this.playornot=="play")
      {
      
        this.player.play().then(() => {
          console.debug('Playing');
          this.playornot="pause";
        });
      }
      else{
        this.pauseAudio();

      }

  }

  pauseAudio(){
      this.player.pause();
      this.playornot="play";
  }

}
