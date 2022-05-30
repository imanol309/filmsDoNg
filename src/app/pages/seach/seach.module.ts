import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeachComponent } from './seach.component';
import { pagesModule } from '../pages.module';
import { SeachRoutingModule } from './seach-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SeachRoutingModule,
    pagesModule
    
  ],
  declarations: [SeachComponent]
})
export class SeachModule { }
