import { NgModule, ErrorHandler } from '@angular/core';
import { TranslateModule,TranslateLoader,TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import {Http} from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { IconTextPage, TabIconTextContentPage } from '../pages/footerbar/footerbar';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    TabIconTextContentPage,
    IconTextPage
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
    Page1,
    Page2,
    Page3,
    TabIconTextContentPage,
    IconTextPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
