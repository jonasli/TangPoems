import { Component } from '@angular/core';

/*
  Generated class for the PoemsList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poems-list',
  templateUrl: 'poems-list.html'
})
export class PoemsListComponent {

  text: string;

  constructor() {
    console.log('Hello PoemsList Component');
    this.text = 'Hello World';
  }

}
