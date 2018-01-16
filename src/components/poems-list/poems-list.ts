import { Component, Input, OnInit } from '@angular/core';
import { IPoem } from "../../models/IPoem";
import { LoadingController, NavController, NavParams } from "ionic-angular";
import { PoetService } from "../../providers/poet-service";
import { PoemDetailPage } from "../../pages/poem-detail/poem-detail";
import { AudioPlayer } from '../../providers/audio-player';

/*
  Generated class for the PoemsList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poems-list',
  templateUrl: 'poems-list.html'
})
export class PoemsListComponent implements OnInit {
    loading: any;

  poems:IPoem[];
  matchedpoems:IPoem[];
  _audioPlayer : AudioPlayer;
  _poetService :PoetService;

  constructor( public poetService :PoetService,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public audioPlayer: AudioPlayer
  ) {
    console.log('Hello PoemsList Component');
    this._audioPlayer=audioPlayer;
    this._poetService=poetService;
    
    
  }

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()

    this._poetService.getPoems().subscribe(
      data=>{
          this.poems=data;
          this.matchedpoems=data;
      })
  }

  getItems(ev) {
 

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.matchedpoems = this.poems.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
        this.matchedpoems =this.poems;
    
    }
  }

  viewPoem(name:string)
  {
    //this.events.publish('poem:view', name);
    this.presentLoadingDefault();
    this.poetService.getPoem(name)
    .subscribe(
      data=>{
        console.log(data[0]);
        this.navCtrl.push(PoemDetailPage, {"poem":data[0] });
 
        var poet = this.poetService.getPoet(data[0].author);

        this._audioPlayer.play({
          src: "/assets/audio/("+data[0].author+")"+ data[0].name + ".mp3",
          artist: data[0].author,
          title: data[0].name,
          art: poet.image,
          preload: 'metadata',
          //id: i

        } );
        console.log(data[0]);
        if(this.loading!=null)
        {
            this.loading.dismiss();
            this.loading=null;
        }
      }
    )
 
  }

   presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

   
  }

}
