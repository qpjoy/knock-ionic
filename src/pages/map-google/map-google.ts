import { Component, NgZone} from '@angular/core';
import { Platform } from 'ionic-angular';
import { GMapsService } from '../../services/google-maps.service';


/**
 * Generated class for the MapGooglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-map-google',
  templateUrl: 'map-google.html',
  providers: [GMapsService]
})

export class MapGooglePage {

  constructor(private gMapsService: GMapsService, private __zone: NgZone, private platform: Platform){}
  lat:number
  lng:number


  public ipt_city_val: string = 'London';

  ionViewDidLoad() {
    // this.platform.ready().then(() => {
    //   this.getAddress();
    // });
  }

  ngOnInit() {
    console.log('ng init !');
    var chicago = {lat: 41.85, lng: -87.65};
    var indianapolis = {lat: 39.79, lng: -86.14};
  }

  getAddress() {
    // Andorra
    this.gMapsService.getLatLan(this.ipt_city_val)
      .subscribe(
        result => {
          this.__zone.run(() => {
            this.lat = result.lat();
            this.lng = result.lng();
          })
        },
        error => console.log(error),
        () => console.log('Geocoding completed!')
      );
  }

  calcRoute() {

  }
}
