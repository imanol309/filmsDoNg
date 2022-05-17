import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component';
import { pagesModule } from '../pages.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    pagesModule
  ]
})
export class HomeModule { }
