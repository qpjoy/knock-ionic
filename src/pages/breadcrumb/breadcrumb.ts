import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

/**
 * Generated class for the BreadcrumbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breadcrumb',
  templateUrl: 'breadcrumb.html',
  animations: [
    trigger('', [

    ])
  ]
})
export class BreadcrumbPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private speechRecognition: SpeechRecognition,
              private zone: NgZone) {
  }

  myInput: string = 'do no input!';

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreadcrumbPage');
  }

  speechIsAvailable() {
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))
  }


  allInOne() {
    // Check permission
    console.log('all in one!')
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => {
        console.log(available)
        if(available) {
          this.speechRecognition.hasPermission()
            .then((hasPermission: boolean) => {
              if(hasPermission) {
                console.log(hasPermission)

                  this.speechRecognition.startListening({})
                    .subscribe(
                      (matches: Array<string>) => {
                        this.zone.run(() => {
                          console.log(matches);
                        })
                      },
                      (onerror) => {
                        console.log('error:', onerror)
                      }
                    )

              }else {
                this.speechRecognition.requestPermission()
                  .then(
                    () => {
                      console.log('Granted')
                    },
                        () => {
                      console.log('Denied')
                    }
                  )
              }
            })
        }else {
          console.log('not available');
        }
      })
  }

  stopListening() {
    console.log('stopped!')
    this.speechRecognition.stopListening()
  }

}
