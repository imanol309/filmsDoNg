import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteDobleGuard } from '../guard/vigilante-doble.guard';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'movies/:idpeli',
        loadChildren: () =>
          import('./viewing-movies/viewing-movies.module').then(
            (m) => m.ViewingMoviesModule
          ),
      },
      {
        path: 'genre/:parameter',
        loadChildren: () =>
          import('./genre/genre.module').then((m) => m.GenreModule),
      },
      {
        path: 'more/view',
        loadChildren: () =>
          import('./more-view/more-view.module').then((m) => m.MoreViewModule),
      },
      {
        path: 'favoriteList',
        loadChildren: () =>
          import('./list-movies/list-movies.module').then(
            (m) => m.ListMoviesModule
          ),
        canActivate: [VigilanteDobleGuard],
      },
      {
        path: 'seach/:tituloPelis',
        loadChildren: () =>
          import('./seach/seach.module').then((m) => m.SeachModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/error404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class pagesRoutingModule {}
