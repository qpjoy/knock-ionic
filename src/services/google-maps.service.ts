import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Observable, Observer } from 'rxjs';

declare var google: any;

@Injectable()
export class GMapsService extends GoogleMapsAPIWrapper{
  constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
    super(__loader, __zone);
  }

  getLatLan(address: string) {
    console.log('Getting Address - ', address);
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
      try {
        this.__loader.load().then(() => {
          geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              observer.next(results[0].geometry.location);
              observer.complete();
            } else {
              console.log('Error - ', results, ' & Status - ', status);
              observer.next({});
              observer.complete();
            }
          });
        })
      } catch (error) {
        observer.error('error getLatLan' + error);
        observer.complete();
      }
    })
  }

  calcRoute(start, end) {
    // var directionsService = new google.maps.DirectionsService();
    // var directionsDisplay;
    // directionsDisplay = new google.maps.DirectionsRenderer();
    // directionsDisplay.setMap(map);
    // directionsDisplay.setPanel(document.getElementById('directionsPanel'));
    //
    // var start = document.getElementById('start').value;
    // var end = new google.maps.LatLng(52.345860, -3.051817);
    // var request = {
    //   origin: start,
    //   destination: end,
    //   travelMode: google.maps.TravelMode.DRIVING
    // };
    // directionsService.route(request, function(result, status) {
    //   if(status == google.maps.DirectionsStatus.OK) {
    //     directionsDisplay.setDirections(result);
    //   }else {
    //     alert('Could not calculate directions. Try again, or buy a map!');
    //   }
    // })
  }

  getGeocoding(address: string) {
    return Observable.create(observer => {
      try {
        //at this point the variable google may be still undefined (google maps scripts still loading)
        //so load all the scripts, then...
        this.__loader.load().then(() => {
          let geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address }, (results, status) => {

            if (status === google.maps.GeocoderStatus.OK) {
              const place = results[0].geometry.location;
              observer.next(place);
              observer.complete();
            } else {
              console.error('Error - ', results, ' & Status - ', status);
              if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                observer.error('Address not found!');
              }else {
                observer.error(status);
              }

              observer.complete();
            }
          });
        });
      } catch (error) {
        observer.error('error getGeocoding' + error);
        observer.complete();
      }
    });
  }

  codeLatLng(coords) {
    try {
      this.__loader.load().then(() => {
          console.log('google script loaded');
          let latlng = new google.maps.LatLng({lat: coords.latitude, lng: coords.longitude});
          let geocoder = new google.maps.Geocoder();
          let location = {
            country: null,
            state: null,
            city: null
          };
          geocoder.geocode({
            'latLng': latlng
          }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                for (let i = 0; i < results[0].address_components.length; i++) {
                  for (let b = 0; b < results[0].address_components[i].types.length; b++) {
                    if (results[0].address_components[i].types[b] == "country") {
                      location.country = !location.country ? results[0].address_components[i] : location.country;
                    } else if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                      location.state = !location.state ? results[0].address_components[i] : location.state;
                    } else if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                      location.city = !location.city ? results[0].address_components[i] : location.city;
                    }
                    if (location.city && location.state && location.country) {
                      break;
                    }
                  }
                }

                console.log(location);
              } else {
                console.log("Results not available");
              }
            }
            else {
              console.log("Geocoder failed due to: ", status);
            }
          });
        }
      );
    } catch (error) {
      console.log('err');
    }
  }
}
