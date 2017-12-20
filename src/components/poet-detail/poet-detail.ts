import { Component, Input, keyframes } from '@angular/core';
import { IPoet } from '../../models/IPoet';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Events, NavController, NavParams, LoadingController } from "ionic-angular";
import { PoemDetailPage } from "../../pages/poem-detail/poem-detail";
import { PoetService } from "../../providers/poet-service";
import { AudioProvider,ITrackConstraint, CordovaAudioTrack } from 'ionic-audio';
import { IPoem } from '../../models/IPoem';
import {AudioPlayer} from '../../providers/audio-player'

/*
  Generated class for the PoetDetail component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poet-detail',
  templateUrl: 'poet-detail.html'
})
export class PoetDetailComponent {
    navController: any;

  @Input() poet: IPoet  ;
  tracks: ITrackConstraint[]  ;
  poems: {[key :string] : IPoem[]};
  _audioPlayer : AudioPlayer;
  browser:any;
  loading :any;
  
  
  constructor(private iab: InAppBrowser,
    public events: Events,
    public navCtrl: NavController,
    public navParams: NavParams,
    public poetService :PoetService,
    public loadingCtrl: LoadingController,
    private _audioProvider: AudioProvider,
    public audioPlayer:AudioPlayer
  ) {
    this._audioPlayer= audioPlayer;
    
  }

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
    console.log(this.poet.name);
    this.poems={};
    this.tracks =  [];
    this.poetService.getPoemsByPoet(this.poet).subscribe(data => {
      
         
        //var i=0;

        for( let  poem of data)
        {

          if(this.poems[poem.category]==null)
            this.poems[poem.category]=[];

          this.poems[poem.category].push(poem);

          this.tracks.push({
            src: "/assets/audio/("+poem.author+")"+ poem.name + ".mp3",
            artist: poem.author,
            title: poem.name,
            art: this.poet.image,
            preload: 'metadata',
            //id: i

          } );
      
        }

        
    });  
      
    //console.log(this.tracks.length);
  }
  
  viewBiography(url:string )
  {
      this.browser = this.iab.create( url, "_self", "closebuttoncaption=Done" );
 
  }

  addToPlayList(p)
  {
      this.audioPlayer.add(this.tracks.filter(item=>item.title==p.name)[0]);
  }

  viewPoem(p)
  {
    //this.events.publish('poem:view', name);
    //this.presentLoadingDefault();
/*     this.poetService.getPoem(name)
    .subscribe(
      data=>{
        console.log(data[0]); */
        this.navCtrl.push(PoemDetailPage, {"poem":p});
       // console.log(data[0]);
        //if(this.loading!=null)
        //{
        //    this.loading.dismiss();
       //     this.loading=null;
       // }
      //})
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

   
  }

  getKeys(item) {
    return Object.keys(item);
   }
}
