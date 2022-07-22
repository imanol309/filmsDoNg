import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error404',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.pagesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'pelis/home',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'app/home',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/error404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class appRoutingModule {}
