import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"

const routes: Routes = [
    {
        path: 'pelis',
        loadChildren: () => import('./pages/pages.module').then((m) => m.pagesModule)
    },
    {
        path: '**', redirectTo: 'pelis'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule {}