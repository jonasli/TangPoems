import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
 

import { HttpClientModule, HttpClient } from '@angular/common/http';
/* import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; */

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthorListPage } from '../pages/author-list/author-list';
import { PoetDetailPage } from '../pages/poet-detail/poet-detail';
import { PoetDetailComponent } from '../components/poet-detail/poet-detail';
import { PoetService } from '../providers/poet-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PoemDetailComponent } from "../components/poem-detail/poem-detail";
import { PoemDetailPage } from "../pages/poem-detail/poem-detail";
import { MainPipe } from "../pipes/pipe.module";
//import { NativeAudio } from '@ionic-native/native-audio';
import { PoemsListComponent } from "../components/poems-list/poems-list";
import { PlayListComponent } from "../components/play-list/play-list";
import { PoemAnnotationComponent } from "../components/poem-annotation/poem-annotation";
import { PoemsListPage } from "../pages/poems-list/poems-list";
import { Media, MediaObject } from '@ionic-native/media';
import { SettingsPage } from "../pages/settings/settings";
import { FavoritePage } from "../pages/favorite/favorite";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AudioPlayer } from '../providers/audio-player';
import { CacheModule, CacheService } from 'ionic-cache';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory, AudioProvider } from 'ionic-audio';

/**
 * Sample custom factory function to use with ionic-audio
 */
export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}


/* export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n', '.json');
} */

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AuthorListPage,
    PoetDetailPage,
    PoemDetailPage,
    PoemsListPage,
    PoetDetailComponent,
    PoemDetailComponent,
    PoemsListComponent,
    PlayListComponent,
    PoemAnnotationComponent,
    SettingsPage,
    FavoritePage
  ],
  imports: [
    BrowserModule,
    IonicAudioModule.forRoot(myCustomAudioProviderFactory),
    IonicModule.forRoot(MyApp, { backButtonText: '返回', }),
    CacheModule.forRoot(),
    HttpClientModule,

    /* TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      } 
    })*/
    MainPipe
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AuthorListPage,
    PoetDetailPage,
    PoemDetailPage,
    PoemsListPage,
    PoetDetailComponent,
    PoemDetailComponent,
    PoemsListComponent,
    PlayListComponent,
    PoemAnnotationComponent,
    SettingsPage,
    FavoritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PoetService,
    InAppBrowser,
    Media,
 
    AudioPlayer,
    CacheService,
    //AudioProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
