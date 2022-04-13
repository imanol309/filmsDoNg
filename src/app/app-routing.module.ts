import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"

const routes: Routes = [
    {
        path: 'app',
        loadChildren: () => import('./pages/pages.module').then((m) => m.pagesModule)
    },
    {
        path: '**', redirectTo: 'app'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule {}