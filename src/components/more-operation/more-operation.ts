import {Component, Input} from '@angular/core';
import {NavParams, Popover, ToastController, ViewController} from "ionic-angular";
import { CallNumber } from '@ionic-native/call-number';
import {BaseUI} from "../../common/baseui";
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MoreOperationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var window: any;
declare var google: any;
@Component({
  selector: 'more-operation',
  templateUrl: 'more-operation.html'
})
export class MoreOperationComponent extends BaseUI{

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              private callNumber: CallNumber,
              public toastCtrl: ToastController) {
    super();
    let value1 = this.navParams.get('key1');
    let value2 = this.navParams.get('key2');
    console.log(this.navParams.data, value1, value2);
    // super();


  }

  callStore() {
    var _this_ = this;
    var _showToast_ = super.showToast;

    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => {
        var toast = _showToast_(this.toastCtrl, 'Your device does not support calling');
        toast.present();
        console.log('Error launching dialer', err);
      });

    // <a href="'tel:+1234567890'">CALL</a>
    //window.location = 'tel:+1234567890';

  }

  routeToStore() {
    var _showToast_ = super.showToast;
    var _this_ = this;
    console.log('routing1');
    console.log(navigator.geolocation);
    if(navigator.geolocation) {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition( function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }, function err(err) {
        var toast = _showToast_(_this_.toastCtrl, `ERROR(${err.code}): ${err.message}`);
        toast.present();
        console.log(`ERROR(${err.code}): ${err.message}`);
      }, options);
    } else {
      var toast = _showToast_(_this_.toastCtrl, 'Browser doesn\'t support Geolocation!');
      toast.present();
      console.log('Browser doesn\'t support Geolocation!')
    }
  }

  dismissPop($event) {
    this.viewCtrl.dismiss();
  }
}
