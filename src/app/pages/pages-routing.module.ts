import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewingMoviesComponent } from './viewing-movies/viewing-movies.component'


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home', 
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'Movies', 
        loadChildren: () =>
          import('./viewing-movies/viewing-movies.module').then((m) => m.ViewingMoviesModule),
      },
      {
        path: '**', redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pagesRoutingModule { }
