import { Component } from '@angular/core';
import { AudioPlayer } from '../../providers/audio-player';
import { ITrackConstraint } from '_ionic-audio@3.2.0@ionic-audio';
import { PopoverController } from '_ionic-angular@3.9.2@ionic-angular';
import { OnInit } from '_@angular_core@5.2.0@@angular/core/src/metadata/lifecycle_hooks';

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
