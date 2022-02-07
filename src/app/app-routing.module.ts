import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"

const routes: Routes = [
    {
        path: 'app',
        loadChildren: () => import('./pages/home.module').then((m) => m.HomeModule)
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