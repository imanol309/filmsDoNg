import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewingMoviesComponent } from './viewing-movies/viewing-movies.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'ViewingMovies', component: ViewingMoviesComponent
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
export class HomeRoutingModule { }
