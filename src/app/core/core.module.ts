import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared';
// import { HeaderComponent, SidebarComponent, FooterComponent } from '../shared';

@NgModule({
  declarations: [
    CoreComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule
  ]
})
export class CoreModule {}
