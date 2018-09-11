import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AnimationService, AnimationBuilder } from "css-animator";


/**
 * Generated class for the AnimationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-animations',
  templateUrl: 'animations.html',
  animations: [
    trigger('myvisibility', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('* => *', animate('0.5s'))
    ])
  ]
})
export class AnimationsPage {
  visibleState: any = 'visible';

  showMore: string = 'true';

  private animator: AnimationBuilder;

  @ViewChild('myElement') myElem;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              animationService: AnimationService) {
    this.animator = animationService.builder();
  }

  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

  toggleVisible() {
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimationsPage');
  }
}
