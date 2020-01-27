import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VehiclesComponent } from './vehicles.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: VehiclesComponent,
  // canActivate: [ AuthGuard ],
    children: [
        { path: '', component: ListComponent },
        { path: 'new', component: CreateComponent },
        { path: ':id', component: CreateComponent },
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
