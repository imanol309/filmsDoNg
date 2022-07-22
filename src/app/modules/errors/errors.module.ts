import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ],
  declarations: [ErrorsComponent]
})
export class ErrorsModule { }
