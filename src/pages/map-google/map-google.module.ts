import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapGooglePage } from './map-google';

@NgModule({
  declarations: [
    MapGooglePage,
  ],
  imports: [
    IonicPageModule.forChild(MapGooglePage),
  ],
})
export class MapGooglePageModule {}
