import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreadcrumbPage } from './breadcrumb';

@NgModule({
  declarations: [
    BreadcrumbPage,
  ],
  imports: [
    IonicPageModule.forChild(BreadcrumbPage),
  ],
})
export class BreadcrumbPageModule {}
