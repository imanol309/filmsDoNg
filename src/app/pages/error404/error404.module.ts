import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404.component';
import { Error404RoutingModule } from './error404-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Error404RoutingModule
  ],
  declarations: [Error404Component]
})
export class Error404Module { }
