import {Component, ElementRef, ViewChild, TemplateRef} from '@angular/core';
import { BaseUI } from "../../common/baseui";
import {IonicPage, LoadingController, PopoverController, NavParams, Popover} from 'ionic-angular'
import { RestProvider } from "../../providers/rest/rest";
import { AgmMap, LatLngBounds, AgmInfoWindow } from "@agm/core";
import {MoreOperationComponent} from "../../components/more-operation/more-operation";
// import {PopoverPage} from "../../components/find-more/find-more";
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

declare var window: any;
declare var google: any;

// @IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage extends BaseUI {
  // @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  @ViewChild('AgmMap')
  agmMap: AgmMap;
  @ViewChild(AgmInfoWindow) infoWindow;

  @ViewChild('infoWindowMsgs')
  private infoWindowMsgsTpl: TemplateRef<any>;

  popOver: Popover;

  markers: any;

  lastSelectedInfoWindow: any;

  infoWindowMsg: any;
  infoWindowMsgs: any;

  c1 = 'ccc1';
  c2 = 'ccc2';
  msgs = 'mssss';

  gogogo() {
    console.log('ggogogogo');
  }

  constructor(public loadCtrl: LoadingController,
              public rest: RestProvider,
              private popoverCtrl: PopoverController,
              private geolocation: Geolocation,
              private iab: InAppBrowser
  ) {
    super();

    this.markers = [
      {
        // ...this.dirArr[0],
        lat: 40.648764,
        lng: -65.575239,
        label: 'lalalalalala',
        draggable: true
      },
    ];

    // setTimeout(function () {
    //   this.infoWindow = new google.maps.InfoWindow({
    //     content: 'hahahalalala'
    //   });
    // }, 3000);
  }

  clickedMarker(infoWindow: any) {
    console.log('clicked  -- - - ', infoWindow);
    if (infoWindow == this.lastSelectedInfoWindow) {
      return;
    }
    if (this.lastSelectedInfoWindow != null) {
      try{
        this.lastSelectedInfoWindow.close();
      } catch {} //in case if you reload your markers
    }
    this.lastSelectedInfoWindow = infoWindow;
  }

  openWebpage(url) {
    const options: InAppBrowserOptions = {
      location: 'yes',
      disallowoverscroll: 'no',
      toolbar:'yes',
      closebuttoncaption:'CloseMe'
    };
    this.iab.create(url,'_blank', options);
  }


  // presentPopover(ev) {
  //
  //   let popover = this.popoverCtrl.create(PopoverComponent, {
  //     // contentEle: this.content.nativeElement,
  //     // textEle: this.text.nativeElement
  //   });
  //
  //   popover.present({
  //     ev: ev
  //   });
  // }

  title = 'AGM project (so48865595)';
  lat = 41.399115;
  lng = 2.160962;

  x: any;
  y: any;

  public dir = undefined;

  public start_point:any = 'Halifax, NS';
  public waypoints:any = [];
  public end_point:any = 'Vancouver, BC';

  public show = true;

  public dirArr = [];

  public renderOptions = {
    suppressMarkers: true,
  }

  public pinSymbol(color) {
    return {
      path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
      // path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
      fillColor: color,
      fillOpacity: 1,
      strokeColor: '#000',
      strokeWeight: 2,
      scale: 2
    };
  }

  public initLocation() {
    // this.dirArr = [{
    //   // origin: 'Halifax, NS',
    //   // destination: 'Vancouver, BC',
    //   origin: {
    //     lat: 45.501689,
    //       lng: -73.567256
    //   },
    //   // destination: this.end_point,
    //   destination: {
    //     // lat: 49.282729,
    //     // lng: -123.120738
    //     lat: 43.653226,
    //       lng: -79.383184
    //   },
    //   // waypoints: [],
    //   // waypoints: this.maped_waypoints,
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
    //     renderOptions: {
    //   preserveViewport: true,
    //     suppressMarkers: true,
    //   // markerOptions: {
    //   //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
    //   // },
    // },
    //   markerOptions: {
    //     origin: {
    //       // icon: 'https://i.imgur.com/7teZKif.png',
    //     },
    //     destination: {
    //       // icon: 'https://i.imgur.com/7teZKif.png',
    //       infoWindow: `
    //     <h4>Hello3<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //     },
    //   },
    //   visible: true,
    //     provideRouteAlternatives: false,
    //   travelMode: 'DRIVING',
    //   // drivingOptions: {
    //   //   departureTime: new Date(/* now, or future date */),
    //   //   trafficModel: 'pessimistic'
    //   // },
    //   // unitSystem: google.maps.UnitSystem.IMPERIAL
    //
    // }]
    // this.dir = {
    //   // origin: this.start_point,
    //   origin: {
    //     lat: 37.793872,
    //     lng: -122.394865
    //   },
    //   // destination: this.end_point,
    //   destination: {
    //     lat: 37.414437,
    //     lng: -122.076985
    //   },
    //   // waypoints: [],
    //   // waypoints: this.maped_waypoints,
    //   waypoints: [
    //     // {location: "montreal, quebec", stopover: true},
    //     // {location: "toronto, ont", stopover: true},
    //     // {location: "chicago, il", stopover: true}
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
    //       icon: 'https://i.imgur.com/7teZKif.png',
    //     },
    //     destination: {
    //       icon: 'https://i.imgur.com/7teZKif.png',
    //       infoWindow: `
    //     <h4>Hello<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //     },
    //   },
    //   visible: true,
    //   provideRouteAlternatives: false,
    //   travelMode: 'DRIVING',
    //   // drivingOptions: {
    //   //   departureTime: new Date(/* now, or future date */),
    //   //   trafficModel: 'pessimistic'
    //   // },
    //   // unitSystem: google.maps.UnitSystem.IMPERIAL
    // }
    this.dirArr = [
      {
        origin: {
          lat: 44.648764,
          lng: -63.575239
        },
        destination: {
          lat: 45.501689,
          lng: -73.567256
        },
        waypoints: [],
        renderOptions: {
          preserveViewport: true,
          suppressMarkers: true,
        },
        visible: true,
        provideRouteAlternatives: false,
        travelMode: 'DRIVING',
        markerOptions: {
          origin: {
            // icon: 'https://i.imgur.com/7teZKif.png',
            // icon: this.pinSymbol('#f53d3d')
            infoWindow: `
        <h4>Hello1<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `},
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
        }
      },
      {
        origin: {
          lat: 45.501689,
          lng: -73.567256
        },
        destination: {
          lat: 43.653226,
          lng: -79.383184
        },
        waypoints: [],
        renderOptions: {
          preserveViewport: true,
          suppressMarkers: true,
        },
        visible: true,
        provideRouteAlternatives: false,
        travelMode: 'DRIVING',
        markerOptions: {
          origin: {
            // icon: 'https://i.imgur.com/7teZKif.png',
            // icon: this.pinSymbol('#f53d3d')
            infoWindow: `
        <h4>Hello3<h4>
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
        <h4>Hello4<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
          },
        }
      },
      {
        origin: {
          lat: 43.653226,
          lng: -79.383184
        },
        destination: {
          lat: 49.282729,
          lng: -123.120738
        },
        waypoints: [],
        renderOptions: {
          preserveViewport: true,
          suppressMarkers: true,
        },
        visible: true,
        provideRouteAlternatives: false,
        travelMode: 'DRIVING',
        markerOptions: {
          origin: {
            // icon: 'https://i.imgur.com/7teZKif.png',
            // icon: this.pinSymbol('#f53d3d')
            infoWindow: `
        <h4>Hello5<h4>
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
        <h4>Hello6<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
          },
        }
      }
    ]
  }

  public setPanel() {
    return document.querySelector('#mapPanel');
  }

  public getDirection_A() {
    this.dir = {
      origin: this.start_point,
      destination: this.end_point,
      // waypoints: [],
      // waypoints: this.maped_waypoints,
      waypoints: [
        {location: "montreal, quebec", stopover: true},
        {location: "toronto, ont", stopover: true},
        // {location: "chicago, il", stopover: true}
      ],
      renderOptions: {
        preserveViewport: true,
        // markerOptions: {
        //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
        // },
      },
      visible: true,
      provideRouteAlternatives: false,
      travelMode: 'DRIVING',
      // drivingOptions: {
      //   departureTime: new Date(/* now, or future date */),
      //   trafficModel: 'pessimistic'
      // },
      // unitSystem: google.maps.UnitSystem.IMPERIAL
    }
  }
  public getDirection_B() {
    this.dir = {
      origin: this.start_point,
      destination: this.end_point,
      // waypoints: [],
      // waypoints: this.maped_waypoints,
      waypoints: [
        {location: "montreal, quebec", stopover: true},
        {location: "toronto, ont", stopover: true},
        {location: "chicago, il", stopover: true}
      ],
      renderOptions: {
        preserveViewport: true,
        // markerOptions: {
        //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
        // },
      },
      visible: true,
      provideRouteAlternatives: false,
      travelMode: 'DRIVING',
      // drivingOptions: {
      //   departureTime: new Date(/* now, or future date */),
      //   trafficModel: 'pessimistic'
      // },
      // unitSystem: google.maps.UnitSystem.IMPERIAL
    }
  }

  // public latitude: Number = 35.56993;
  // public longitude: Number = -92.697407;
  public latitude: Number = 44.648764;
  public longitude: Number = -63.575239;
  public zoom: number = 3;

  public map: any;

  public origin: {}
  public destination: {}
  loading: any;

  ngOnInit() {
    this.infoWindowMsg = `<h1>1315</h1>`;
    this.loading = 'loading';
    console.log(this.infoWindowMsgsTpl, ' this is info tpl');
  }

  ionViewDidLoad() {

    // this.agmMap.mapReady.subscribe(map => {
    //   const bounds: LatLngBounds = new google.maps.LatLngBounds();
    //   for(const mm of [this.dir.origin, this.dir.destination]) {
    //     bounds.extend(new google.maps.LatLng(mm.lat, mm.lng));
    //   }
    //   map.fitBounds(bounds);
    // })

    this.initLocation();
    //加载用户数据
    var loading = super.showLoading(this.loadCtrl, "加载中...");

    // this.rest.login('15150123123', '123123')
    //   .subscribe(f => {
    //     console.log(f, '=> this is f');
    //     loading.dismissAll();
    //   });

    setTimeout(() => {
      loading.dismissAll();
    }, 1000)
  }

  ngAfterViewInit() {
    console.log(this.agmMap);
    // this.agmMap.mapReady.subscribe(map => {
    //   const bounds: LatLngBounds = new google.maps.LatLngBounds();
    //   for(const mm of [this.dir.origin, this.dir.destination]) {
    //     bounds.extend(new google.maps.LatLng(mm.lat, mm.lng));
    //   }
    //   map.fitBounds(bounds);
    // })

    // this.getGeolocation();



    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   console.log(data);
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    // });
  }


  getDirection() {
    this.origin = { lat: 31.206888, lng: 121.601896 }
    this.destination = { lat: 31.203142, lng: 121.601642 }
    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }


  goToDirections() {
    console.log('goto directions!');
    // window.location = `geo:${this.dir.destination.lat},${this.dir.destination.lng};u=35`;
    console.log('goto directions1!');
    // window.location = `http://maps.apple.com/?saddr=Cupertino&daddr=San+Francisco`;
    // window.open('maps://?q=51.178847,-1.826160', '_system');
    // window.open('maps://?address=51.83%2C-8.3016');

    // window.location = 'maps://?address=51.83%2C-8.3016';

    this.openWebpage(`http://maps.apple.com/?saddr=Cupertino&daddr=San+Francisco`);
  }


  public changeHandler(event: any){
    console.log(event, 'lolololo~w~ QwQ!!!!');
  }
  presentPopover(ev) {

    this.geolocation.watchPosition().subscribe((position) => {
      console.log(position, 'this is position~')
      this.x = position.coords.longitude;
      this.y = position.coords.latitude;

      let latLng = new google.maps.LatLng(this.x, this.y);

      let marker = new google.maps.Marker({
        map: this.map,
        icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
          new google.maps.Size(22, 22),
          new google.maps.Point(0, 18),
          new google.maps.Point(11, 11)),
        position: latLng
      });

      let content = "<h4>You are here</h4>";
      this.map.addInfoWindow(marker, content);

    }, (err) => {
      console.log(err);
    });


    let popover = this.popoverCtrl.create(MoreOperationComponent, {
      key1: 'k1',
      key2: 'k2'
    });

    return popover.present({
      ev: ev
    });

    // this.popOver = popover;


  }

  public HideDirection(integer) {
    // this.dirArr.forEach(dir => {
    //   console.log(dir, ' - - -')
    //   dir.visible = false;
    // });
    this.dirArr[integer].visible = false;
    // this.dirArr.forEach(dir => {
    //   console.log(dir, ' - - -')
    //   dir.visible = false;
    // });
  }

  public ShowDirection() {
    // this.dirArr.forEach(dir => {
    //   dir.visible = true;
    // });

    this.dirArr[0].visible = true;

    this.dirArr.forEach(dir => {
      console.log(dir, ' - - -')
      dir.visible = true;
    });
    // this.dirArr = [
    //   {
    //     // origin: 'Halifax, NS',
    //     // destination: 'Vancouver, BC',
    //     origin: {
    //       lat: 44.648764,
    //       lng: -63.575239
    //     },
    //     // destination: this.end_point,
    //     destination: {
    //       // lat: 49.282729,
    //       // lng: -123.120738
    //       lat: 45.501689,
    //       lng: -73.567256
    //     },
    //     // waypoints: [],
    //     // waypoints: this.maped_waypoints,
    //     waypoints: [
    //       // Halifax, NS
    //       // lat: 44.648764,
    //       // lng: -63.575239
    //
    //       // {location: "montreal, quebec", stopover: true},
    //       // lat: 45.501689,
    //       // lng: -73.567256
    //
    //       // {location: "toronto, ont", stopover: true},
    //       // lat: 43.653226,
    //       // lng: -79.383184
    //
    //       // {location: "chicago, il", stopover: true}
    //       // lat: 41.878114,
    //       // lng: -87.629798
    //
    //       // Vancouver, BC
    //       // lat: 49.282729,
    //       // lng: -123.120738
    //     ],
    //     renderOptions: {
    //       preserveViewport: true,
    //       suppressMarkers: true,
    //       // markerOptions: {
    //       //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
    //       // },
    //     },
    //     markerOptions: {
    //       origin: {
    //         // icon: 'https://i.imgur.com/7teZKif.png',
    //         // icon: this.pinSymbol('#f53d3d')
    //         infoWindow: `
    //     <h4>Hello1<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //       },
    //       destination: {
    //         //     icon: 'https://i.imgur.com/7teZKif.png',
    //         //     infoWindow: `
    //         // <h4>Hello<h4>
    //         // <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //         // `
    //         infoWindow: `
    //     <h4>Hello2<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //       },
    //     },
    //     visible: true,
    //     provideRouteAlternatives: false,
    //     travelMode: 'DRIVING',
    //     // drivingOptions: {
    //     //   departureTime: new Date(/* now, or future date */),
    //     //   trafficModel: 'pessimistic'
    //     // },
    //     // unitSystem: google.maps.UnitSystem.IMPERIAL
    //     name: 'way1'
    //   },
    //   {
    //     // origin: 'Halifax, NS',
    //     // destination: 'Vancouver, BC',
    //     origin: {
    //       lat: 45.501689,
    //       lng: -73.567256
    //     },
    //     // destination: this.end_point,
    //     destination: {
    //       // lat: 49.282729,
    //       // lng: -123.120738
    //       lat: 43.653226,
    //       lng: -79.383184
    //     },
    //     // waypoints: [],
    //     // waypoints: this.maped_waypoints,
    //     waypoints: [
    //       // Halifax, NS
    //       // lat: 44.648764,
    //       // lng: -63.575239
    //
    //       // {location: "montreal, quebec", stopover: true},
    //       // lat: 45.501689,
    //       // lng: -73.567256
    //
    //       // {location: "toronto, ont", stopover: true},
    //       // lat: 43.653226,
    //       // lng: -79.383184
    //
    //       // {location: "chicago, il", stopover: true}
    //       // lat: 41.878114,
    //       // lng: -87.629798
    //
    //       // Vancouver, BC
    //       // lat: 49.282729,
    //       // lng: -123.120738
    //     ],
    //     renderOptions: {
    //       preserveViewport: true,
    //       suppressMarkers: true,
    //       // markerOptions: {
    //       //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
    //       // },
    //     },
    //     markerOptions: {
    //       origin: {
    //         // icon: 'https://i.imgur.com/7teZKif.png',
    //       },
    //       destination: {
    //         // icon: 'https://i.imgur.com/7teZKif.png',
    //         infoWindow: `
    //     <h4>Hello3<h4>
    //     <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //     `
    //       },
    //     },
    //     visible: true,
    //     provideRouteAlternatives: false,
    //     travelMode: 'DRIVING',
    //     // drivingOptions: {
    //     //   departureTime: new Date(/* now, or future date */),
    //     //   trafficModel: 'pessimistic'
    //     // },
    //     // unitSystem: google.maps.UnitSystem.IMPERIAL
    //
    //   },
    //
    //   // {
    //   //   // origin: 'Halifax, NS',
    //   //   // destination: 'Vancouver, BC',
    //   //   origin: {
    //   //     lat: 43.653226,
    //   //     lng: -79.383184
    //   //   },
    //   //   // destination: this.end_point,
    //   //   destination: {
    //   //     // lat: 49.282729,
    //   //     // lng: -123.120738
    //   //     lat: 41.878114,
    //   //     lng: -87.629798
    //   //   },
    //   //   // waypoints: [],
    //   //   // waypoints: this.maped_waypoints,
    //   //   waypoints: [
    //   //     // Halifax, NS
    //   //     // lat: 44.648764,
    //   //     // lng: -63.575239
    //   //
    //   //     // {location: "montreal, quebec", stopover: true},
    //   //     // lat: 45.501689,
    //   //     // lng: -73.567256
    //   //
    //   //     // {location: "toronto, ont", stopover: true},
    //   //     // lat: 43.653226,
    //   //     // lng: -79.383184
    //   //
    //   //     // {location: "chicago, il", stopover: true}
    //   //     // lat: 41.878114,
    //   //     // lng: -87.629798
    //   //
    //   //     // Vancouver, BC
    //   //     // lat: 49.282729,
    //   //     // lng: -123.120738
    //   //   ],
    //   //   renderOptions: {
    //   //     preserveViewport: true,
    //   //     // suppressMarkers: true,
    //   //     // markerOptions: {
    //   //     //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
    //   //     // },
    //   //   },
    //   //   markerOptions: {
    //   //     origin: {
    //   //       icon: 'https://i.imgur.com/7teZKif.png',
    //   //     },
    //   //     destination: {
    //   //       icon: 'https://i.imgur.com/7teZKif.png',
    //   //       infoWindow: `
    //   //   <h4>Hello<h4>
    //   //   <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //   //   `
    //   //     },
    //   //   },
    //   //   visible: true,
    //   //   provideRouteAlternatives: false,
    //   //   travelMode: 'DRIVING',
    //   //   // drivingOptions: {
    //   //   //   departureTime: new Date(/* now, or future date */),
    //   //   //   trafficModel: 'pessimistic'
    //   //   // },
    //   //   // unitSystem: google.maps.UnitSystem.IMPERIAL
    //   // },
    //   // {
    //   //   // origin: 'Halifax, NS',
    //   //   // destination: 'Vancouver, BC',
    //   //   origin: {
    //   //     lat: 41.878114,
    //   //     lng: -87.629798
    //   //   },
    //   //   // destination: this.end_point,
    //   //   destination: {
    //   //     // lat: 49.282729,
    //   //     // lng: -123.120738
    //   //     lat: 49.282729,
    //   //     lng: -123.120738
    //   //   },
    //   //   // waypoints: [],
    //   //   // waypoints: this.maped_waypoints,
    //   //   waypoints: [
    //   //     // Halifax, NS
    //   //     // lat: 44.648764,
    //   //     // lng: -63.575239
    //   //
    //   //     // {location: "montreal, quebec", stopover: true},
    //   //     // lat: 45.501689,
    //   //     // lng: -73.567256
    //   //
    //   //     // {location: "toronto, ont", stopover: true},
    //   //     // lat: 43.653226,
    //   //     // lng: -79.383184
    //   //
    //   //     // {location: "chicago, il", stopover: true}
    //   //     // lat: 41.878114,
    //   //     // lng: -87.629798
    //   //
    //   //     // Vancouver, BC
    //   //     // lat: 49.282729,
    //   //     // lng: -123.120738
    //   //   ],
    //   //   renderOptions: {
    //   //     preserveViewport: true,
    //   //     suppressMarkers: true,
    //   //     // markerOptions: {
    //   //     //   icon: 'https://image.ibb.co/cLwp5n/678111_map_marker_256.png'
    //   //     // },
    //   //   },
    //   //   markerOptions: {
    //   //     origin: {
    //   //       // icon: 'https://i.imgur.com/7teZKif.png',
    //   //     },
    //   //     destination: {
    //   //       // icon: 'https://i.imgur.com/7teZKif.png',
    //   //       infoWindow: `
    //   //   <h4>Hello<h4>
    //   //   <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //   //   `
    //   //     },
    //   //   },
    //   //   visible: true,
    //   //   provideRouteAlternatives: false,
    //   //   travelMode: 'DRIVING',
    //   //   // drivingOptions: {
    //   //   //   departureTime: new Date(/* now, or future date */),
    //   //   //   trafficModel: 'pessimistic'
    //   //   // },
    //   //   // unitSystem: google.maps.UnitSystem.IMPERIAL
    //   // }
    // ]
  }

  getGeolocation() {
    this.geolocation.getCurrentPosition({timeout: 30000,
      enableHighAccuracy: true}).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp, ' - - - - - - - geo geogeo geo geo');
    }).catch((err) => {
      // console.log('Error getting location', error);
      console.log(`ERROR(${err.code}): ${err.message}`);
    });
  }

  goBackHandler() {
    console.log('hhh h h h ')
  }
}
