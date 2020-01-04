import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { RealtimeMapComponent } from './realtime-map/realtime-map.component';
import { RouterModule } from '@angular/router';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  declarations: [
      MapComponent,
      RealtimeMapComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MapRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MapModule { }
