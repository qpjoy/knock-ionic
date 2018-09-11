import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { NavController, NavParams } from 'ionic-angular';
import {GMapsService} from "../../services/google-maps.service";

/**
 * Generated class for the GeocodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-geocode',
  templateUrl: 'geocode.html',
  providers: [GMapsService]
})
export class GeocodePage {
  // google maps zoom level
  public lat: Number = 44.648764;
  public lng: Number = -63.575239;
  public zoom: number = 3;
  public dir = undefined;

  public dirArr = [];

  public setPanel() {
    return document.querySelector('#myPanel');
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dirArr = [
      {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 },
      visible: false,
      waypoints: [
        // Halifax, NS
        // lat: 44.648764,
        // lng: -63.575239

        // {location: "montreal, quebec", stopover: true},
        // lat: 45.501689,
        // lng: -73.567256

        // {location: "toronto, ont", stopover: true},
        // lat: 43.653226,
        // lng: -79.383184

        // {location: "chicago, il", stopover: true}
        // lat: 41.878114,
        // lng: -87.629798

        // Vancouver, BC
        // lat: 49.282729,
        // lng: -123.120738
      ],
      renderOptions: {
        preserveViewport: true,
        suppressMarkers: true,
        // markerOptions: {
        //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
        // },
      },
      markerOptions: {
        origin: {
          // icon: 'https://i.imgur.com/7teZKif.png',
          // icon: this.pinSymbol('#f53d3d')
          infoWindow: `
        <h4>Hello1<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
        },
        destination: {
          //     icon: 'https://i.imgur.com/7teZKif.png',
          //     infoWindow: `
          // <h4>Hello<h4>
          // <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
          // `
          infoWindow: `
        <h4>Hello2<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
        },
      },
      provideRouteAlternatives: false,
      travelMode: 'DRIVING',
      // drivingOptions: {
      //   departureTime: new Date(/* now, or future date */),
      //   trafficModel: 'pessimistic'
      // },
      // unitSystem: google.maps.UnitSystem.IMPERIAL
      name: 'way1'
    },
      {
      origin: { lat: 24.799748, lng: 120.974021 },
      destination: { lat: 24.792524, lng: 120.975517 },
      visible: true,
      waypoints: [
        // Halifax, NS
        // lat: 44.648764,
        // lng: -63.575239

        // {location: "montreal, quebec", stopover: true},
        // lat: 45.501689,
        // lng: -73.567256

        // {location: "toronto, ont", stopover: true},
        // lat: 43.653226,
        // lng: -79.383184

        // {location: "chicago, il", stopover: true}
        // lat: 41.878114,
        // lng: -87.629798

        // Vancouver, BC
        // lat: 49.282729,
        // lng: -123.120738
      ],
      renderOptions: {
        preserveViewport: true,
        suppressMarkers: true,
        // markerOptions: {
        //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
        // },
      },
      markerOptions: {
        origin: {
          // icon: 'https://i.imgur.com/7teZKif.png',
          // icon: this.pinSymbol('#f53d3d')
          infoWindow: `
        <h4>Hello1<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
        },
        destination: {
          //     icon: 'https://i.imgur.com/7teZKif.png',
          //     infoWindow: `
          // <h4>Hello<h4>
          // <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
          // `
          infoWindow: `
        <h4>Hello2<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
        },
      },
      provideRouteAlternatives: false,
      travelMode: 'DRIVING',
      // drivingOptions: {
      //   departureTime: new Date(/* now, or future date */),
      //   trafficModel: 'pessimistic'
      // },
      // unitSystem: google.maps.UnitSystem.IMPERIAL
      name: 'way2'
    }]
    console.log('ionViewDidLoad GeocodePage');
  }

  ionViewWillEnter () {
    console.log( 'view will enter' );
  }


  public HideDirection() {
    // this.dirArr.forEach(dir => {
    //   console.log(dir, ' - - -')
    //   dir.visible = false;
    // });
    this.dirArr[0].visible = false;
  }

  public ShowDirection() {
    // this.dirArr.forEach(dir => {
    //   dir.visible = true;
    // });

    this.dirArr[0].visible = true;

    // this.dirArr = [
    //   {
    //   origin: { lat: 24.799448, lng: 120.979021 },
    //   destination: { lat: 24.799524, lng: 120.975017 },
    //   visible: true,
    //   waypoints: [
    //     // Halifax, NS
    //     // lat: 44.648764,
    //     // lng: -63.575239
    //
    //     // {location: "montreal, quebec", stopover: true},
    //     // lat: 45.501689,
    //     // lng: -73.567256
    //
    //     // {location: "toronto, ont", stopover: true},
    //     // lat: 43.653226,
    //     // lng: -79.383184
    //
    //     // {location: "chicago, il", stopover: true}
    //     // lat: 41.878114,
    //     // lng: -87.629798
    //
    //     // Vancouver, BC
    //     // lat: 49.282729,
    //     // lng: -123.120738
    //   ],
    //   renderOptions: {
    //     preserveViewport: true,
    //     suppressMarkers: true,
    //     // markerOptions: {
    //     //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
    //     // },
    //   },
    //   markerOptions: {
    //     origin: {
    //       // icon: 'https://i.imgur.com/7teZKif.png',
    //       // icon: this.pinSymbol('#f53d3d')
    //       infoWindow: `
    //     <h4>Hello1<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //     },
    //     destination: {
    //       //     icon: 'https://i.imgur.com/7teZKif.png',
    //       //     infoWindow: `
    //       // <h4>Hello<h4>
    //       // <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //       // `
    //       infoWindow: `
    //     <h4>Hello2<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //     },
    //   },
    //   provideRouteAlternatives: false,
    //   travelMode: 'DRIVING',
    //   // drivingOptions: {
    //   //   departureTime: new Date(/* now, or future date */),
    //   //   trafficModel: 'pessimistic'
    //   // },
    //   // unitSystem: google.maps.UnitSystem.IMPERIAL
    //   name: 'way1'
    // }, {
    //   origin: { lat: 24.799748, lng: 120.974021 },
    //   destination: { lat: 24.792524, lng: 120.975517 },
    //   visible: false,
    //   waypoints: [
    //     // Halifax, NS
    //     // lat: 44.648764,
    //     // lng: -63.575239
    //
    //     // {location: "montreal, quebec", stopover: true},
    //     // lat: 45.501689,
    //     // lng: -73.567256
    //
    //     // {location: "toronto, ont", stopover: true},
    //     // lat: 43.653226,
    //     // lng: -79.383184
    //
    //     // {location: "chicago, il", stopover: true}
    //     // lat: 41.878114,
    //     // lng: -87.629798
    //
    //     // Vancouver, BC
    //     // lat: 49.282729,
    //     // lng: -123.120738
    //   ],
    //   renderOptions: {
    //     preserveViewport: true,
    //     suppressMarkers: true,
    //     // markerOptions: {
    //     //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
    //     // },
    //   },
    //   markerOptions: {
    //     origin: {
    //       // icon: 'https://i.imgur.com/7teZKif.png',
    //       // icon: this.pinSymbol('#f53d3d')
    //       infoWindow: `
    //     <h4>Hello1<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //     },
    //     destination: {
    //       //     icon: 'https://i.imgur.com/7teZKif.png',
    //       //     infoWindow: `
    //       // <h4>Hello<h4>
    //       // <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //       // `
    //       infoWindow: `
    //     <h4>Hello2<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //     },
    //   },
    //   provideRouteAlternatives: false,
    //   travelMode: 'DRIVING',
    //   // drivingOptions: {
    //   //   departureTime: new Date(/* now, or future date */),
    //   //   trafficModel: 'pessimistic'
    //   // },
    //   // unitSystem: google.maps.UnitSystem.IMPERIAL
    //   name: 'way2'
    // }];
  }

  // initLocation() {
  //   this.dirArr = [
  //     {
  //       // origin: 'Halifax, NS',
  //       // destination: 'Vancouver, BC',
  //       origin: {
  //         lat: 44.648764,
  //         lng: -63.575239
  //       },
  //       // destination: this.end_point,
  //       destination: {
  //         // lat: 49.282729,
  //         // lng: -123.120738
  //         lat: 45.501689,
  //         lng: -73.567256
  //       },
  //       // waypoints: [],
  //       // waypoints: this.maped_waypoints,
  //       waypoints: [
  //         // Halifax, NS
  //         // lat: 44.648764,
  //         // lng: -63.575239
  //
  //         // {location: "montreal, quebec", stopover: true},
  //         // lat: 45.501689,
  //         // lng: -73.567256
  //
  //         // {location: "toronto, ont", stopover: true},
  //         // lat: 43.653226,
  //         // lng: -79.383184
  //
  //         // {location: "chicago, il", stopover: true}
  //         // lat: 41.878114,
  //         // lng: -87.629798
  //
  //         // Vancouver, BC
  //         // lat: 49.282729,
  //         // lng: -123.120738
  //       ],
  //       renderOptions: {
  //         preserveViewport: true,
  //         suppressMarkers: true,
  //         // markerOptions: {
  //         //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
  //         // },
  //       },
  //       markerOptions: {
  //         origin: {
  //           // icon: 'https://i.imgur.com/7teZKif.png',
  //           // icon: this.pinSymbol('#f53d3d')
  //           infoWindow: `
  //       <h4>Hello1<h4>
  //       <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
  //       `
  //         },
  //         destination: {
  //           //     icon: 'https://i.imgur.com/7teZKif.png',
  //           //     infoWindow: `
  //           // <h4>Hello<h4>
  //           // <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
  //           // `
  //           infoWindow: `
  //       <h4>Hello2<h4>
  //       <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
  //       `
  //         },
  //       },
  //       visible: false,
  //       provideRouteAlternatives: false,
  //       travelMode: 'DRIVING',
  //       // drivingOptions: {
  //       //   departureTime: new Date(/* now, or future date */),
  //       //   trafficModel: 'pessimistic'
  //       // },
  //       // unitSystem: google.maps.UnitSystem.IMPERIAL
  //       name: 'way1'
  //     },
  //     {
  //       // origin: 'Halifax, NS',
  //       // destination: 'Vancouver, BC',
  //       origin: {
  //         lat: 45.501689,
  //         lng: -73.567256
  //       },
  //       // destination: this.end_point,
  //       destination: {
  //         // lat: 49.282729,
  //         // lng: -123.120738
  //         lat: 43.653226,
  //         lng: -79.383184
  //       },
  //       // waypoints: [],
  //       // waypoints: this.maped_waypoints,
  //       waypoints: [
  //         // Halifax, NS
  //         // lat: 44.648764,
  //         // lng: -63.575239
  //
  //         // {location: "montreal, quebec", stopover: true},
  //         // lat: 45.501689,
  //         // lng: -73.567256
  //
  //         // {location: "toronto, ont", stopover: true},
  //         // lat: 43.653226,
  //         // lng: -79.383184
  //
  //         // {location: "chicago, il", stopover: true}
  //         // lat: 41.878114,
  //         // lng: -87.629798
  //
  //         // Vancouver, BC
  //         // lat: 49.282729,
  //         // lng: -123.120738
  //       ],
  //       renderOptions: {
  //         preserveViewport: true,
  //         suppressMarkers: true,
  //         // markerOptions: {
  //         //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
  //         // },
  //       },
  //       markerOptions: {
  //         origin: {
  //           // icon: 'https://i.imgur.com/7teZKif.png',
  //         },
  //         destination: {
  //           // icon: 'https://i.imgur.com/7teZKif.png',
  //           infoWindow: `
  //       <h4>Hello3<h4>
  //       <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
  //       `
  //         },
  //       },
  //       visible: false,
  //       provideRouteAlternatives: false,
  //       travelMode: 'DRIVING',
  //       // drivingOptions: {
  //       //   departureTime: new Date(/* now, or future date */),
  //       //   trafficModel: 'pessimistic'
  //       // },
  //       // unitSystem: google.maps.UnitSystem.IMPERIAL
  //       name: 'way2'
  //     }
  //     ]
  // }

}

