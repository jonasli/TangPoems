import { NgModule, ErrorHandler } from '@angular/core';
import { TranslateModule,TranslateLoader,TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import {Http} from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthorListPage } from '../pages/author-list/author-list';
import { PoetDetailPage } from '../pages/poet-detail/poet-detail';
import {PoetDetailComponent} from '../components/poet-detail/poet-detail';
import {PoetService} from '../providers/poet-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PoemDetailComponent } from "../components/poem-detail/poem-detail";
import { PoemDetailPage } from "../pages/poem-detail/poem-detail";
import { MainPipe} from "../pipes/pipe.module";

@NgModule({
  declarations: [
    MyApp,
    AuthorListPage,
    PoetDetailPage,
    PoemDetailPage,
    PoetDetailComponent,
    PoemDetailComponent
    // TabIconTextContentPage,
    // IconTextPage
  ],
  imports: [
      IonicModule.forRoot(MyApp),
      TranslateModule.forRoot({ 
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
          deps: [Http]
        }),
      MainPipe
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthorListPage,
    PoetDetailPage,
    PoemDetailPage,
    PoetDetailComponent,
    PoemDetailComponent
    // TabIconTextContentPage,
    // IconTextPage
  ],
  providers: [{provide: ErrorHandler,
     useClass: IonicErrorHandler ,
      }, 
      PoetService,
      InAppBrowser
  ],
  
    
})
export class AppModule {}
