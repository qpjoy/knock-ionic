import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the MyFrameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'my-frame',
  templateUrl: 'my-frame.html'
})
export class MyFrameComponent {

  text: string;

  // video: string = "http://www.youtube.com/embed/CD-E-LDc384"
  video: string = "http://www.youtube.com1"

  constructor() {
    console.log('Hello MyFrameComponent Component');
    this.text = 'Hello World';
  }

}
