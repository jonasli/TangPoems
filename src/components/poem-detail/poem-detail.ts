import { Component, Input } from '@angular/core';
import { IPoem } from "../../models/IPoem";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { PoemBodyAnnotation } from "../../pipes/poem-body-annotation"
import { IPoet } from "../../models/IPoet";
import { PoetDetailPage } from "../../pages/poet-detail/poet-detail";
import { NavController, LoadingController } from ".2.2.0@ionic-angular";
import { PoetService } from "../../providers/poet-service";
/*
  Generated class for the PoemDetail component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poem-detail',
  templateUrl: 'poem-detail.html'//,
  // styleUrls:['/components/poem-detail/poem-detail.scss']
})
export class PoemDetailComponent {
    

  @Input() poem: IPoem  ;
  browser:any;
  loading :any;
  constructor(private iab: InAppBrowser,
  public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public poetService :PoetService ) {
    console.log('Hello PoemDetail Component');
    console.log(this.poem);
  }

  ngOnInit() {
    
    console.log("ngOnInit():"+this.poem); // object here
  }

  viewAppreciation(url:string )
  {
      this.browser = this.iab.create( url, "_self", "closebuttoncaption=Done" );
 
  }

  viewPoetDetail (event, p:string) {

    this.presentLoadingDefault();
    this.poetService.getPoet(p)
    .subscribe(
      data=>{
        console.log(data[0]);
        this.navCtrl.push(PoetDetailPage, {"poet":data[0] });
        console.log(data[0]);
        if(this.loading!=null)
        {
            this.loading.dismiss();
            this.loading=null;
        }
      })

  }

    presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

   
  }

}
