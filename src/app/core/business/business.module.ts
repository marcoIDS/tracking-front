import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  declarations: [
      BusinessComponent,
      ListComponent,
      CreateComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BusinessRoutingModule,
  ],
  entryComponents: [
  ]
})
export class BusinessModule { }
