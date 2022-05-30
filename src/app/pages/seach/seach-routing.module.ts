import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeachComponent } from './seach.component';

const routes: Routes = [
	{
		path: '',
		component: SeachComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SeachRoutingModule { }
