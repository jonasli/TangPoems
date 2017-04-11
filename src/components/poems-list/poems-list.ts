import { Component, Input } from '@angular/core';
import { IPoem } from "../../models/IPoem";
import { LoadingController, NavController, NavParams } from "ionic-angular";
import { PoetService } from "../../providers/poet-service";
import { PoemDetailPage } from "../../pages/poem-detail/poem-detail";

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
    loading: any;

  poems:IPoem[];
  matchedpoems:IPoem[];

  constructor( public poetService :PoetService,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams) {
    console.log('Hello PoemsList Component');


    poetService.getPoems().subscribe(
      data=>{
          this.poems=data;
      })
    
  }

  getItems(ev) {
 

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.matchedpoems = this.poems.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewPoem(name:string)
  {
    //this.events.publish('poem:view', name);
    this.presentLoadingDefault();
    this.poetService.getPoem(name)
    .subscribe(
      data=>{
        console.log(data[0]);
        this.navCtrl.push(PoemDetailPage, {"poem":data[0] });
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
