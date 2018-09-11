import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {
  orderItems = [1,1,1,1,1,1];

  orderItemsRaw = [1,1,1,1,1,1];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
  }

  goBackHandler(env) {
    console.log('gogogogo',env);
    // this.navCtrl.pop();
  }

  barChart = 'sales_trend';

  segmentChanged(event) {
    console.log(event);
  }

}
