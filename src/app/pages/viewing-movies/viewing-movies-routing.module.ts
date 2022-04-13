import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewingMoviesComponent } from './viewing-movies.component';

const routes: Routes = [
	{
		path: '',
		component: ViewingMoviesComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ViewingMoviesRoutingModule { }
