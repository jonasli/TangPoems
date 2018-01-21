import { Component, OnInit } from '@angular/core';
import { AudioPlayer } from '../../providers/audio-player';
import { ITrackConstraint } from 'ionic-audio';
import { PopoverController } from 'ionic-angular';
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

  public mode: string;

  ngOnInit(): void {
    this.tracks = this.audioPlayer.playlist;
    if (this.audioPlayer.getMode() == PlayMode.forward)
      this.mode = "arrow-round-forward";
    else if (this.audioPlayer.getMode() == PlayMode.repeat)
      this.mode = "repeat";
    else
      this.mode = "shuffle";
  }

  public tracks: ITrackConstraint[];



  constructor(public audioPlayer: AudioPlayer
  ) {
    console.log('Hello PlayListComponent Component');

  }



  changePlayMode() {
    if (this.audioPlayer.getMode() == PlayMode.forward) {
      this.audioPlayer.SetMode(PlayMode.repeat);
      this.mode = "repeat";
    }
    else if (this.audioPlayer.getMode() == PlayMode.repeat) {
      this.audioPlayer.SetMode(PlayMode.shuffle);
      this.mode = "repeat";
    }

    else {
      this.mode = "arrow-round-forward";
      this.audioPlayer.SetMode(PlayMode.forward);
    }


  }



}
