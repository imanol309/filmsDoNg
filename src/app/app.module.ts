import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { HomeComponent } from './pages/home/components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
