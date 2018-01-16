import { Component,OnInit } from '@angular/core';
import { AudioPlayer } from '../../providers/audio-player';
import { ITrackConstraint } from 'ionic-audio';
import { PopoverController } from 'ionic-angular';
 

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
  ngOnInit(): void {
    this.tracks = this.audioPlayer.playlist;
  }

  public tracks: ITrackConstraint[];

  

  constructor(public audioPlayer: AudioPlayer 
    ) {
    console.log('Hello PlayListComponent Component');
   
  }



  



}
