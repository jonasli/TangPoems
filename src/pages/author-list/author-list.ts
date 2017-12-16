import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PoetService} from "../../providers/poet-service";
import { PoetDetailPage } from "../poet-detail/poet-detail"
import { IPoet } from "../../models/IPoet";
import { IPoem } from "../../models/IPoem";
import { CordovaAudioTrack, ITrackConstraint } from '.3.2.0@ionic-audio';
/*
  Generated class for the AuthorList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-author-list',
  templateUrl: 'author-list.html'
})
export class AuthorListPage {
    navController: any;

  public poets : any = [];
  matchedpoets:IPoet[];
  
  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public poetService :PoetService) {
        this.navController = navCtrl;
        this.poetService.getPoets()
        .subscribe(data => {
          this.poets = data;
          this.matchedpoets=data;
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorListPage');
    
    

  }


  getItems(ev) {
    
   
       // set val to the value of the ev target
       var val = ev.target.value;
   
       // if the value is an empty string don't filter the items
       if (val && val.trim() != '') {
         this.matchedpoets = this.poets.filter((item) => {
           return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
         })
       }
       else{
           this.matchedpoets =this.poets;
       
       }
     }

  viewPoetDetail (event, p:IPoet) {

      this.poetService.getPoemsByPoet(p).subscribe(data => {
      
        var myTracks: ITrackConstraint[]= [];
        //var i=0;

        for( let  poem of data)
        {

          myTracks.push({
            src: "/assets/audio/("+poem.author+")"+ poem.name + ".mp3",
            artist: poem.author,
            title: poem.name,
            art: p.image,
            preload: 'metadata',
            //id: i

          } );
      
        }
         


         this.navController.push(PoetDetailPage, {"poet":p, "tracks" :myTracks });
       });
    
       
  }

}
