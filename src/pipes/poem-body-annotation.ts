import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { IAnnotation } from "../models/IPoem";

/*
  Generated class for the PoemBodyAnnotation pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'poembodyannotation'
})
@Injectable()
export class PoemBodyAnnotation implements PipeTransform {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, arg1,arg2) {
    var line : string  = value + ''; // make sure it's a string
    let anns:IAnnotation[] = arg1 ;
    let num:number = arg2;
    for (var i=0;i<anns.length;i++)
    {
      if(i==num)
      {
        var position = line.indexOf(anns[i].word)+anns[i].word.length;
        line = line.substring(0,position+1) + "<sub>["+i+"]</sub>" +line.substring(position+1) ;
      }
    };

    return line;
  }
}
