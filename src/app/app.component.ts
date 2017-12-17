import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {TranslateService} from '@ngx-translate/core'; 

 
import { AuthorListPage } from '../pages/author-list/author-list';
import { PoemsListPage } from "../pages/poems-list/poems-list";
import { SettingsPage } from "../pages/settings/settings";
import { FavoritePage } from "../pages/favorite/favorite";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = AuthorListPage;

  pages: Array<{title: string, component: any, icon: string,color :string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '作者查询', component: AuthorListPage, icon: 'search', color: 'faOrange' },
      { title: '诗词查询', component: PoemsListPage , icon: 'search', color: 'faOrange' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
