import { Component } from '@angular/core';

/**
 * Generated class for the AngFrameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ang-frame',
  templateUrl: 'ang-frame.html'
})
export class AngFrameComponent {

  text: string;

  constructor() {
    console.log('Hello AngFrameComponent Component');
    this.text = 'Hello World';
  }

}
