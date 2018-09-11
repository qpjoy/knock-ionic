import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapPage } from "../pages/map/map";
import { MapGooglePage } from '../pages/map-google/map-google';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import {GeocodePage} from "../pages/geocode/geocode";
import {NotesPage} from "../pages/notes/notes";
import { RestProvider } from '../providers/rest/rest';
import {MoreOperationComponent} from "../components/more-operation/more-operation";
import {CallNumber} from "@ionic-native/call-number";
import {Geolocation} from "@ionic-native/geolocation";
import {MyFrameComponent,SafePipe} from "../components/my-frame/my-frame";
import {AngFrameComponent} from "../components/ang-frame/ang-frame";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AnimationsPage} from "../pages/animations/animations";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {AnimationService, AnimatesDirective, AnimationMode} from "css-animator";
import {ChatterPage} from "../pages/chatter/chatter";
import {BreadcrumbPage} from "../pages/breadcrumb/breadcrumb";
// import {ComponentsModule} from "../components/components.module";
// import {SharedModule} from "./shared.module";
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {InventoryPage} from "../pages/inventory/inventory";
import {GtmHeaderComponent} from "../components/gtm-header/gtm-header";
import { IonicStorageModule } from '@ionic/storage';
import {OrdersPage} from "../pages/orders/orders";
import {CounterComponent} from "../components/counter/counter";
import {GtmVisitHistoryPage} from "../pages/gtm-visit-history/gtm-visit-history";

import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


@NgModule({
  declarations: [
    MyApp,
    BreadcrumbPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    MapGooglePage,
    GeocodePage,
    NotesPage,
    MoreOperationComponent,
    MyFrameComponent,
    SafePipe,
    AngFrameComponent,
    AnimationsPage,
    AnimatesDirective,
    ChatterPage,
    InventoryPage,
    GtmHeaderComponent,
    OrdersPage,
    CounterComponent,
    GtmVisitHistoryPage
  ],
  imports: [
    BrowserModule,
    // AnimationMode,
    BrowserAnimationsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    // AgmCoreModule.forRoot({ apiKey: 'AIzaSyDOX6S7zys0OY5zYvOi9q2mdoqVD-qhB-U'}),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAbCJE7rc818WWZzkZKlfzce_erqmLr8iU'}),
    AgmSnazzyInfoWindowModule,
    AgmDirectionModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BreadcrumbPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    MapGooglePage,
    GeocodePage,
    NotesPage,
    AnimationsPage,
    MoreOperationComponent,
    ChatterPage,
    InventoryPage,
    GtmHeaderComponent,
    OrdersPage,
    CounterComponent,
    GtmVisitHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    CallNumber,
    Geolocation,
    InAppBrowser,
    AnimationService,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
