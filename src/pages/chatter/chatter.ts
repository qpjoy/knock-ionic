import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatter',
  templateUrl: 'chatter.html',
})
export class ChatterPage {

  chatTab: string = "feeds";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatterPage');
  }

  menuList: Array<any> = [
    { name:'FEEDS'},{ name:'MY CONNECTIONS'},{ name:'MY GROUPS'}
  ];

  charInfoList: Array<any> = [
    {userName: 'Venkman', userAvatar: 'assets/imgs/venkman.jpg', userRoll:'Agent', userLocation:'New York', createTime:'2 mins ago',
      chatContent:'Here is a showcase of a card using several different items. It begins with the list card element, utilizing the item-avatar list item, an item-body element for images and text, and a footer with the item-divider classname.',
      likeCount:'12', commentCount:'4'},
    {userName: 'Spengler', userAvatar: 'assets/imgs/spengler.jpg', userRoll:'Agent', userLocation:'Shang Hai', createTime:'11h ago',
      chatContent:'Just Test',
      likeCount:'1', commentCount:'12'},
  ];

}
