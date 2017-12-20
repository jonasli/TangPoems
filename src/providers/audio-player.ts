import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IPoem } from '../models/IPoem';
import { PlayerState } from '../models/enums';

import { AudioProvider,ITrackConstraint, CordovaAudioTrack } from 'ionic-audio';
// import { AudioProvider } from 'ionic-audio';
/*
  Generated class for the Player provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AudioPlayer {
 
	stream:any;
	promise:any;
	status: PlayerState;
	public playlist: ITrackConstraint[];
	public current:	ITrackConstraint;
	

	constructor(
		// , private audioProvider: AudioProvider
		
	) {
		this.playlist=[];
		this.status=PlayerState.idle;
	};

	play(track: ITrackConstraint) {
		this.current=track;

		this.playlist.push(track);
	/* 	this.stream = new Audio(this.url);
		this.stream.play();
		this.promise = new Promise((resolve,reject) => {
			this.stream.addEventListener('playing', () => {
				resolve(true);
				this.status=PlayerState.playing;
			});

			this.stream.addEventListener('error', () => {
				reject(false);
			});
		});
		return this.promise; */
	};


	add(track:ITrackConstraint)
	{
		if(this.playlist.length==0)
			this.play(track);
		else
			this.playlist.push(track);
	}

	remove(track:ITrackConstraint)
	{

		 
	}

	pause() {
		this.stream.pause();
		this.status=PlayerState.pause;
	};

 
}
