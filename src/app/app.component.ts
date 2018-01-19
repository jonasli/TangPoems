import { Component, ViewChild,ChangeDetectorRef } from '@angular/core';
import { Nav, Platform, NavController, ActionSheetController, PopoverController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TranslateService } from '@ngx-translate/core';


import { AuthorListPage } from '../pages/author-list/author-list';
import { PoemsListPage } from "../pages/poems-list/poems-list";
import { SettingsPage } from "../pages/settings/settings";
import { FavoritePage } from "../pages/favorite/favorite";
import { AudioProvider, IAudioTrack } from 'ionic-audio';
import { AudioPlayer } from "../providers/audio-player";
import { PoemDetailPage } from "../pages/poem-detail/poem-detail";
import { PoetService } from '../providers/poet-service';
import { CacheModule, CacheService } from 'ionic-cache';
import { PlayListComponent } from '../components/play-list/play-list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  _audioPlayer: AudioPlayer;
  rootPage: any = AuthorListPage;

  pages: Array<{ title: string, component: any, icon: string, color: string }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public audioPlayer: AudioPlayer,
    public poetService: PoetService,
    public cache: CacheService,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController,
    private _audioProvider: AudioProvider,
    private _cdRef: ChangeDetectorRef
  ) {

    this.platform.ready().then(() => {
      // Set TTL to 12h
      cache.setDefaultTTL(60 * 60 * 12);

      // Keep our cached results when device is offline!
      cache.setOfflineInvalidate(false);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this._audioPlayer = audioPlayer;

    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '作者查询', component: AuthorListPage, icon: 'search', color: 'faOrange' },
      { title: '诗词查询', component: PoemsListPage, icon: 'search', color: 'faOrange' }
    ];

  }

  initializeApp() {

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PlayListComponent
     , {"audioPlayer": this._audioPlayer}
     , {cssClass: 'popover-page'}
    );
    popover.present();
  }

  viewPoem(p) {
    //this.events.publish('poem:view', name);
    //this.presentLoadingDefault();
    this.poetService.getPoem(p.title)
      .subscribe(
      data => {
        console.log(data[0]);
        this.nav.push(PoemDetailPage, { "poem": data[0] });
        // console.log(data[0]);
        //if(this.loading!=null)
        //{
        //    this.loading.dismiss();
        //     this.loading=null;
        // }
      })
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
    var i = this._audioPlayer.next();
    this._audioProvider.tracks[i].play();
   // this._cdRef.detectChanges();
 
  } 

}
