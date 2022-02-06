import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent,],
  imports: [
    CommonModule,
    NavBarComponent
  ]
})
export class HomeModule { }
