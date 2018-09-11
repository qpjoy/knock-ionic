import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GtmHomePage } from './gtm-home';

@NgModule({
  declarations: [
    GtmHomePage,
  ],
  imports: [
    IonicPageModule.forChild(GtmHomePage),
  ],
})
export class GtmHomePageModule {}
