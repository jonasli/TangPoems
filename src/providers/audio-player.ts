import { Injectable } from '@angular/core';
import { Media } from '@ionic-native/media';
import { NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IPoem } from '../models/IPoem';
import { ITrack } from '../models/ITrack';
import { PlayerState } from '../models/enums';
import { PlayMode } from '../models/enums';
/* import { AudioProvider, ITrackConstraint, CordovaAudioTrack } from 'ionic-audio'; */
// import { AudioProvider } from 'ionic-audio';
/*
  Generated class for the Player provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AudioPlayer {

	media: any;
	_ready: Promise<any>;

	status: PlayerState;
	private playMode: PlayMode;
	public playlist:ITrack[];
	public current: ITrack; 


	constructor(private platform: Platform, 
		private cordovaMedia: Media,
		private zone: NgZone
	 ) {
		this._ready = new Promise((resolve, reject) => {
			return this.platform.ready();
		});
	}

	ready(): Promise<any> {
		return this._ready;
	}


	trash() {
		this.playlist = [];
 
	}

	SetMode(mode: PlayMode) {
		this.playMode = mode;

	}

	getMode(): PlayMode {
		return this.playMode;
	}

	 
	next() {
		let nextIndex: number = 0;
		if (this.playMode == PlayMode.forward) {

			var currentIndex = this.playlist.findIndex(data => { return this.current.title == data.title });
			if (currentIndex < (this.playlist.length - 1)) {
				nextIndex = ++currentIndex;

			}
			else {
				nextIndex = 0;
			}
			//this.current=this.playlist[nextIndex];
		} else if (this.playMode == PlayMode.repeat) {
			nextIndex = this.playlist.findIndex(data => { return this.current.title == data.title });
			//this.current=this.current;

		}
		else {
			nextIndex = Math.floor(Math.random() * this.playlist.length);
			//this.current=this.playlist[nextIndex];
		}
		this.current=this.playlist[nextIndex];
		this.play(this.current);
		return nextIndex;
	}



	add(track: ITrack) {
		if (this.playlist.length == 0)
			this.play(track);
		else
			this.playlist.push(track);
	}

	remove(track: ITrack) {
		this.playlist = this.playlist.filter(i => { return i.title != track.title });

		if (this.current != null && this.current.title == track.title) {
			this.next();

		}
	}

	/* Plays a sound, stopping other playing sounds if necessary */
	play(sound:ITrack) {
		this.stopPlayback();

		/* Plays with Cordova Audio if available, falls back on Web Audio.
		 * If something goes wrong in playing with Cordova Audio, play with
		 * Web Audio as well
		 */
		if (window.hasOwnProperty('cordova') && window.hasOwnProperty('Media')) {
			try {
				this.playWithCordovaAudio(sound);
			} catch (error) {
				if (sound.remoteSrc) {
					this.playWithWebAudio(sound, sound.remoteSrc);
				} else {
					this.playWithWebAudio(sound);
				}
			}
		} else {
			this.playWithWebAudio(sound);
		}
	}

	playWithWebAudio(sound, alternativeSrc = null) {
		const src = alternativeSrc || sound.src;
		this.media = new Audio(src);

		/* Adding event listeners to update the sound's isPlaying attribute accordingly */
		this.media.onended = () => {
			sound.isPlaying = false;
		};
		this.media.onpause = () => {
			sound.isPlaying = false;
		};
		this.media.onplay = () => {
			sound.isPlaying = true;
		};

		this.media.load();
		this.media.play();
	}

	playWithCordovaAudio(sound) {
		this.media = this.cordovaMedia.create(sound.src);

		/* Adding status callback to update the sound's isPlaying attribute accordingly */
		this.media.statusCallback = status => {
			/* Run this in ngZone to propagate changes to the UI */
			this.zone.run(() => {
				switch (status) {
					case this.cordovaMedia.MEDIA_RUNNING:
						sound.isPlaying = true;
						break;
					case this.cordovaMedia.MEDIA_PAUSED:
						sound.isPlaying = false;
						break;
					case this.cordovaMedia.MEDIA_STOPPED:
						sound.isPlaying = false;
						break;
				}
			});
		};

		this.media.play();
	}

	/* Stops the playback of the sound */
	stopPlayback() {
		if (this.media) {
			if (this.media.release) {
				this.media.stop();
				this.media.release();
			} else {
				this.media.pause();
			}
			this.media = null;
		}
	}


}
