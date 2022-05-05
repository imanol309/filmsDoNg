import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreViewComponent } from './more-view.component';

const routes: Routes = [
	{
		path: '',
		component: MoreViewComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})

export class MoreViewRoutingModule { }