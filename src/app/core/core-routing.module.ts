import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
// import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: './map/map.module#MapModule' },
      { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesModule' },
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'business', loadChildren: './business/business.module#BusinessModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
