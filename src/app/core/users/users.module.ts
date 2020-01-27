import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
      UsersComponent,
      ListComponent,
      CreateComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UsersRoutingModule,
  ],
  entryComponents: [
  ]
})
export class UsersModule { }
