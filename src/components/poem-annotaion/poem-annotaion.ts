import { Component } from '@angular/core';

/*
  Generated class for the PoemAnnotaion component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poem-annotaion',
  templateUrl: 'poem-annotaion.html'
})
export class PoemAnnotaionComponent {

  text: string;

  constructor() {
    console.log('Hello PoemAnnotaion Component');
    this.text = 'Hello World';
  }

}
