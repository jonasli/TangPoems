import { Component, Input } from '@angular/core';
import { IPoet } from '../models/IPoet';
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
  
  
  constructor() {
    console.log('Hello PoetDetail Component');
    
  }

  

}
