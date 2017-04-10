import { Component } from '@angular/core';

/*
  Generated class for the PoemAnnotation component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poem-annotation',
  templateUrl: 'poem-annotation.html'
})
export class PoemAnnotationComponent {

  text: string;

  constructor() {
    console.log('Hello PoemAnnotation Component');
    this.text = 'Hello World';
  }

}
