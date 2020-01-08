import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

declare var google: any;
declare var document: any;

@Component({
  selector: 'app-tiles-map',
  templateUrl: 'ModalDetails.html',
  styleUrls: ['./realtime-map.component.scss']
})
export class DialogOverviewModalDialogComponent {
  rutas='rutas';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
//////////////////////////
@Component({
  selector: 'app-realtime-map',
  templateUrl: './realtime-map.component.html',
  styleUrls: ['./realtime-map.component.scss']
})
export class RealtimeMapComponent implements OnInit {
  map:any;
  constructor(
    public dialog: MatDialog,
  ) { }
  cars = [
    {
      id: '1',
      name: 'Nissan versa 2019',    
      enrollment: '1564-HTY-02',
      lat: 20.597949,
      lng: -100.400980,
      route: [
        {
          lat: 20.597949,
          lng: -100.400980,
        }, {
          lat: 20.589343,
          lng: -100.388507
        }, {
          lat: 20.589798,
          lng: -100.377563
        }, {
          lat: 20.564246,
          lng: -100.400896,
        }
      ]
    },
    {
      id: '2',
      name: 'Nissan Tiida 2018',    
      enrollment: '1501-JL-02',
      lat: 20.589343,
      lng: -100.388507,
      route: [
        {
          lat: 20.597949,
          lng: -100.400980,
        }, {
          lat: 20.589343,
          lng: -100.388507
        }, {
          lat: 20.589798,
          lng: -100.377563
        }, {
          lat: 20.564246,
          lng: -100.400896,
        }
      ]
    },
    {
      id: '3',
      name: 'VW Jetta 2019',    
      enrollment: '1487-MVL-07',
      lat: 20.589798,
      lng: -100.377563,
      route: [
        {
          lat: 20.597949,
          lng: -100.400980,
        }, {
          lat: 20.589343,
          lng: -100.388507
        }, {
          lat: 20.589798,
          lng: -100.377563
        }, {
          lat: 20.564246,
          lng: -100.400896,
        }
      ]
    },
    {
      id: '4',
      name: 'KW 4500 2019',    
      enrollment: '1454-LLL-42',
      lat: 20.564246,
      lng: -100.400896,
      route: [
        {
          lat: 20.597949,
          lng: -100.400980,
        }, {
          lat: 20.589343,
          lng: -100.388507
        }, {
          lat: 20.589798,
          lng: -100.377563
        }, {
          lat: 20.564246,
          lng: -100.400896,
        }
      ]
    }
  ]

  markers=[];
  flightPath = new google.maps.Polyline({
    geodesic: true,
    strokeColor: '#36a1ff',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });;
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
    const controls = document.getElementById('controls');
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(controls);

    this.map = map;
    this.filtrarCar('all');
  }

  filtrarCar(car){
    this.map.setZoom(12)
    console.log(car);
    this.markers.forEach(element => {
      element.setMap(null);
    });
    this.markers = [];
    this.flightPath.setMap(null)
    if(car=='all'){
      let i=0;
      this.cars.forEach(element => {
        const myLatLng = {lat: element.lat, lng: element.lng};
        let marker = new google.maps.Marker({
          position: myLatLng,
          map: this.map,
          title: element.name,
          animation: google.maps.Animation.DROP,
        });
        this.markers.push(marker);
        this.map.setCenter(myLatLng); 
        google.maps.event.addListener(this.markers[i], 'click', () => {
          console.log(element);
          this.openDialog(element);
        });
        i++;
      });
    }else{
      const myLatLng = {lat: car.lat, lng: car.lng};
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: car.name,
        animation: google.maps.Animation.DROP,
      });
      this.markers.push(marker);
      this.map.setCenter(myLatLng);   
      google.maps.event.addListener(marker, 'click', () => {
        console.log(car);    
        this.openDialog(car);    
      });  
    }
    
  } 

  openDialog(car): void {
    const dialogRef = this.dialog.open(DialogOverviewModalDialogComponent, {
      width: '700px',
      height: '400px',
      data: {car: (car)}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result === 'rutas'){
        var flightPlanCoordinates = [];
        car.route.forEach(element => {
          flightPlanCoordinates.push({lat: element.lat, lng: element.lng});
        });
        this.flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#36a1ff',
          strokeOpacity: 1.0,
          strokeWeight: 4
        });
        this.flightPath.setMap(this.map);
        this.markers.forEach(element => {
          element.setMap(null);
        });
        this.markers = [];
      }      
    });
  }

}
