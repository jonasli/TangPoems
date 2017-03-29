import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {TranslateService} from 'ng2-translate';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { TabIconTextContentPage } from '../pages/footerbar/footerbar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,translate: TranslateService) {
    this.initializeApp();
      // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('zh_CN');
 
         // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('zh_CN');
    var pageTitle=[];
    translate.get(['volume1','volume2','volume3','volume4','volume5','volume6','volume7','volume8']).subscribe(data => 
    {
        console.log(data);
        
        pageTitle.push(data['volume1']);
        pageTitle.push(data['volume2']);
        pageTitle.push(data['volume3']);
        pageTitle.push(data['volume4']);
        pageTitle.push(data['volume5']);
        pageTitle.push(data['volume6']);
        pageTitle.push(data['volume7']);
        pageTitle.push(data['volume8']);

        this.pages[0].title=data['volume1'];
        this.pages[1].title=data['volume2'];
        this.pages[2].title=data['volume3'];
        this.pages[3].title=data['volume4'];
        this.pages[4].title=data['volume5'];
        this.pages[5].title=data['volume6'];
        this.pages[6].title=data['volume7'];
        this.pages[7].title=data['volume8'];

    });
     
   
    //used for an example of ngFor and navigation
    this.pages = [
      { title: pageTitle[0], component: Page1 },
      { title: pageTitle[1], component: Page2 },
      { title: pageTitle[2], component: Page3 },
      { title: pageTitle[3], component: Page1 },
      { title: pageTitle[4], component: Page1 },
      { title: pageTitle[5], component: Page1 },
      { title: pageTitle[6], component: Page1 },
      { title: pageTitle[7], component: TabIconTextContentPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
