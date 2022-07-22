import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './components/signUp/signUp/signUp.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [AuthComponent, SignUpComponent],
  exports: [SignUpComponent],
})
export class AuthModule {}
