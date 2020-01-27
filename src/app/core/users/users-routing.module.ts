import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent,
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
export class UsersRoutingModule { }
