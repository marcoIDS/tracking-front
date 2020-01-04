import { Component, OnInit } from '@angular/core';

declare var google: any;
declare var document: any;
@Component({
  selector: 'app-realtime-map',
  templateUrl: './realtime-map.component.html',
  styleUrls: ['./realtime-map.component.scss']
})
export class RealtimeMapComponent implements OnInit {
  map:any;
  constructor() { }

  ngOnInit() {
    let map;
    const opts = {
      tilt: 0,
      streetViewControl: false,
      center: new google.maps.LatLng(20.703630, -101.339201),
      zoom: 19,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: true      
    };

    map = new google.maps.Map(document.getElementById('map'), opts);
    map.setMapTypeId('roadmap');
    this.map = map;
  }

}
