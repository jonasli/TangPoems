import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IPoem } from '../models/IPoem';
import { PlayerState } from '../models/enums';
import {PlayMode} from '../models/enums';
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
	private playMode:PlayMode;
	public playlist: ITrackConstraint[] = [];
	public current:	ITrackConstraint;
	

	constructor() {
		
		this.status=PlayerState.idle;
		
	};

	trash()
	{
		this.playlist=[];
		this.current=null;
		
	}

	SetMode(mode:PlayMode){
		this.playMode=mode;

	}

	getMode():PlayMode{
		return this.playMode;
	}

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

	next()
	{
		let nextIndex: number=0;
		if(this.playMode==PlayMode.forward)
		{
			
			var currentIndex=this.playlist.findIndex(data=>{return this.current.title==data.title});
			if(currentIndex<(this.playlist.length-1))
			{
				nextIndex=++currentIndex;
				
			}
			else
			{
				nextIndex=0;
			}
			//this.current=this.playlist[nextIndex];
		}else if(this.playMode==PlayMode.repeat)
		{
			nextIndex= this.playlist.findIndex(data=>{return this.current.title==data.title});
			//this.current=this.current;
			
		} 
		else{
			nextIndex=Math.floor(Math.random() * this.playlist.length)   ;
			//this.current=this.playlist[nextIndex];
		}
		this.current=this.playlist[nextIndex];
		return nextIndex;
	}

	 

	add(track:ITrackConstraint)
	{
		if(this.playlist.length==0)
			this.play(track);
		else
			this.playlist.push(track);
	}

	remove(track:ITrackConstraint)
	{
		this.playlist=this.playlist.filter(i=>{return i.title!=track.title});
		 
		if(this.current!=null && this.current.title==track.title)
		{
			this.next();

		}
	}

	pause() {
		this.stream.pause();
		this.status=PlayerState.pause;
	};

 
}
