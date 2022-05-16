import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"

const routes: Routes = [
    {
        path: 'pelis',
        loadChildren: () => import('./pages/pages.module').then((m) => m.pagesModule)
    },
    {
        path: 'error404',
        loadChildren: () => import('./pages/error404/error404.module').then((m) => m.Error404Module)
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