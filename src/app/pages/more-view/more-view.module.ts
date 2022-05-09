import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreViewComponent } from './more-view.component';
import { MoreViewRoutingModule } from './more-view-routing.module';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { MovieSectionsComponent } from 'src/app/components/movie-sections/movie-sections.component';
import { pagesModule } from '../pages.module';

@NgModule({
  imports: [
    CommonModule,
    MoreViewRoutingModule,
    pagesModule
  ],
  declarations: [MoreViewComponent]
})
export class MoreViewModule { }
