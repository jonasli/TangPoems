import { Component, Input } from '@angular/core';
import { IPoet } from '../../models/IPoet';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Events, NavController, NavParams } from "ionic-angular";
import { PoemDetailPage } from "../../pages/poem-detail/poem-detail";
import { PoetService } from "../../providers/poet-service";
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
  browser:any;

  
  constructor(private iab: InAppBrowser,
    public events: Events,
    public navCtrl: NavController,
    public navParams: NavParams,
    public poetService :PoetService
  
  ) {
    console.log('Hello PoetDetail Component');
    
  }

  
  viewBiography(url:string )
  {
      this.browser = this.iab.create( url, "_self", "closebuttoncaption=Done" );
 
  }

  viewPoem(name:string)
  {
    //this.events.publish('poem:view', name);
 
    this.poetService.getPoems(name)
    .subscribe(
      data=>{
        console.log(data[0]);
        this.navCtrl.push(PoemDetailPage, {"poem":data[0] });
        console.log(data[0]);
    })
  }
}
