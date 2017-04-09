import { Component, Input } from '@angular/core';
import { IPoet } from '../../models/IPoet';
import { InAppBrowser } from '@ionic-native/in-app-browser';
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

  @Input() poet: IPoet  ;
  browser:any;

  
  constructor(private iab: InAppBrowser) {
    console.log('Hello PoetDetail Component');
    
  }

  
  viewBiography(url:string )
  {
      this.browser = this.iab.create( url, "_self", "closebuttoncaption=Done" );
 
  }
}
