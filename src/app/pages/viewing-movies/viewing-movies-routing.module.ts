import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewingMoviesModule } from './viewing-movies.module';

const routes: Routes = [
	{
		path: '',
		component: ViewingMoviesModule,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ViewingMoviesRoutingModule { }
