import { NgModule, ErrorHandler } from '@angular/core';
import { TranslateModule,TranslateLoader,TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import {Http} from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthorListPage } from '../pages/author-list/author-list';
import { PoetDetailPage } from '../pages/poet-detail/poet-detail';
import {PoetService} from '../providers/poet-service';

@NgModule({
  declarations: [
    MyApp,
    AuthorListPage,
    PoetDetailPage
    // TabIconTextContentPage,
    // IconTextPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     TranslateModule.forRoot({ 
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
          deps: [Http]
        })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthorListPage,
    PoetDetailPage
    // TabIconTextContentPage,
    // IconTextPage
  ],
  providers: [{provide: ErrorHandler,
     useClass: IonicErrorHandler ,
      }, PoetService]
})
export class AppModule {}
