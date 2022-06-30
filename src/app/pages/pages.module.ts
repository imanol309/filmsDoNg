import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pagesRoutingModule } from './pages-routing.module';
import { ViewCrashComponent } from '../components/view-crash/view-crash.component';
import { ModalSeekerComponent } from '../components/modal-seeker/modal-seeker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCrashRowComponent } from '../components/view-crash-row/view-crash-row.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SpinnerLoadingComponent } from '../components/spinner-loading/spinner-loading.component';
import { RegistrationComponent } from '../components/Registration/Registration.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CommentsComponent } from '../components/comments/comments.component';

@NgModule({
  declarations: [
    ViewCrashComponent,
    ModalSeekerComponent,
    ViewCrashRowComponent,
    SpinnerLoadingComponent,
    RegistrationComponent,
    FooterComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    pagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
  ],
  exports: [
    ViewCrashComponent,
    ModalSeekerComponent,
    ViewCrashRowComponent,
    MatSidenavModule,
    SpinnerLoadingComponent,
    RegistrationComponent,
    FooterComponent,
    CommentsComponent
  ],
})
export class pagesModule {}
