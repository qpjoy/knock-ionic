import { Component, ViewChild, ElementRef } from '@angular/core';

import { PopoverController, NavParams } from 'ionic-angular';
import { MoreOperationComponent } from "../more-operation/more-operation";


@Component({
  template: `
    <ion-list>
      <ion-list-header class="find_more_opration_header">
        <ion-row>
          <ion-col col-9>
            More Options
          </ion-col>
          <ion-col col-3 text-right>
            <ion-icon name="close"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-list-header>
      <ion-item class="find_more_opration" (click)="callStore()">
        <span class="find_more_opration_font">CALL STORE</span>
      </ion-item>
      <ion-item class="find_more_opration" (click)="routeToStore()">
        <span class="find_more_opration_font">ROUTE TO STORE</span>
      </ion-item>
      <ion-item class="find_more_opration">
        <span class="find_more_opration_font">ROUTE TO STORE</span>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {

  }

  callStore() {
    console.log('calling');
  }

  routeToStore() {
    console.log('routing');
  }
}





@Component({
  selector: 'find-more',
  templateUrl: 'find-more.html'
})
export class FindMoreComponent {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;


  constructor(private popoverCtrl: PopoverController) {
    console.log('Hello FindMoreComponent Component');
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(MoreOperationComponent, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });


    setTimeout(() => {
      popover.dismiss();
    },3000)
  }

}
