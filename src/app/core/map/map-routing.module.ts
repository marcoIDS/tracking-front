import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map.component';
import {RealtimeMapComponent} from './realtime-map/realtime-map.component'

const routes: Routes = [
  { path: '', component: MapComponent,
  // canActivate: [ AuthGuard ],
    children: [
        { path: '', component: RealtimeMapComponent },
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class MapRoutingModule { }
