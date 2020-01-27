import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { VehiclesComponent } from './vehicles.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule({
  declarations: [
      VehiclesComponent,
      ListComponent,
      CreateComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    VehiclesRoutingModule,
  ],
  entryComponents: [
  ]
})
export class VehiclesModule { }
