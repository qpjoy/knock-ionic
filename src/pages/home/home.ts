import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists:[any];

  ionViewDidLoad() {
    this.lists = [
      {},{},{},{},{},
      {},{},{},{},{}
    ]
  }

  constructor(public navCtrl: NavController) {
  }

  goToMap() {
    // this.navCtrl.push(MapPage, this.game);
  }

}
