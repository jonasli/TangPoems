import { Component, Input } from '@angular/core';
import { IPoem } from "../../models/IPoem";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { PoemBodyAnnotation } from "../../pipes/poem-body-annotation"
import { IPoet } from "../../models/IPoet";
import { PoetDetailPage } from "../../pages/poet-detail/poet-detail";
import { Events, NavController, NavParams, LoadingController } from "ionic-angular";
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
  public poetService :PoetService  ) {
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

  viewPoetDetail (p:string) {

    this.presentLoadingDefault();
 
        let poet:IPoet = this.poetService.getPoet(p);
        console.log(poet);
        this.navCtrl.push(PoetDetailPage, {"poet":poet });
        console.log(poet);
        if(this.loading!=null)
        {
            this.loading.dismiss();
            this.loading=null;
        }
 

  }

    presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

   
  }

}
