import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { RealtimeMapComponent, DialogOverviewModalDialogComponent } from './realtime-map/realtime-map.component';
import { RouterModule } from '@angular/router';
import { MapRoutingModule } from './map-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
      MapComponent,
      RealtimeMapComponent,
      DialogOverviewModalDialogComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    MapRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  entryComponents: [
    DialogOverviewModalDialogComponent,
  ]
})
export class MapModule { }
