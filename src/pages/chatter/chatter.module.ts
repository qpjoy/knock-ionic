import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatterPage } from './chatter';

@NgModule({
  declarations: [
    ChatterPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatterPage),
  ],
})
export class ChatterPageModule {}
