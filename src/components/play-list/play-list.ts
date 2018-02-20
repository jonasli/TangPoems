import { Component, OnInit } from '@angular/core';
import { AudioPlayer } from '../../providers/audio-player';
import { ITrack } from '../../models/ITrack';
import { PopoverController, AlertController } from 'ionic-angular';
import { PlayMode } from '../../models/enums';
 


/**
 * Generated class for the PlayListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'play-list',
  templateUrl: 'play-list.html'
})
export class PlayListComponent implements OnInit {
  public tracks: ITrack[];
  public mode: string;

  constructor(public audioPlayer: AudioPlayer,
    private alertCtrl: AlertController
  ) {
    console.log('Hello PlayListComponent Component');

  }


  ngOnInit(): void {
   // this.tracks = this.audioPlayer.playlist;
    if (this.audioPlayer.getMode() == PlayMode.forward)
      this.mode = "arrow-round-forward";
    else if (this.audioPlayer.getMode() == PlayMode.repeat)
      this.mode = "repeat";
    else
      this.mode = "shuffle";
  }
  public getMode() {
    if (this.audioPlayer.getMode() == PlayMode.forward)
      return "顺序播放";
    else if (this.audioPlayer.getMode() == PlayMode.repeat)
      return "循环播放";
    else
      return "随机播放";

  }

  changePlayMode() {
    if (this.audioPlayer.getMode() == PlayMode.forward) {
      this.audioPlayer.SetMode(PlayMode.repeat);
      this.mode = "repeat";
    }
    else if (this.audioPlayer.getMode() == PlayMode.repeat) {
      this.audioPlayer.SetMode(PlayMode.shuffle);
      this.mode = "shuffle";
    }

    else {
      this.mode = "arrow-round-forward";
      this.audioPlayer.SetMode(PlayMode.forward);
    }


  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '清除播放列表',
      message: '确定所有播放列表中的曲目?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.audioPlayer.trash();
            //this.tracks=[];
          
          }
        }
      ]
    });
    alert.present();
  }

  like(t:ITrack){
    

  }

  remove(t:ITrack){
    this.audioPlayer.remove(t);
    //this.tracks=this.audioPlayer.playlist;
  }


}
