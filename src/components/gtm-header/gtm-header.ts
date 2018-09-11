import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the GtmHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gtm-header',
  templateUrl: 'gtm-header.html'
})
export class GtmHeaderComponent {

  @Input('pageTitle') pageTitle;
  @Input('backWord') backWord;
  @Input('optWord') optWord;

  @Output()
  goBack = new EventEmitter();

  text: string;
  displayBackBtn: Boolean = false;

  constructor( public navCtrl: NavController,
               private storage: Storage) {
    console.log('Hello GtmHeaderComponent Component');
    storage.get('deviceBaseInfo').then((val) => {
      let deviceBaseInfo = JSON.parse(val);
      let isMobile = deviceBaseInfo['isMobile'];
      let isTabletOrPad = deviceBaseInfo['isTabletOrPad'];
      console.log('Your age is - --- -', val);
    });
  }

  ionViewDidEnter() {
    this.displayBackBtn = true;
  }

  goBackHandler() {
    console.log('hhh h h h ')
    this.goBack.emit({});
  }

}
