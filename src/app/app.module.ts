import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteSectionComponent } from './note-section/note-section.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { ReferralListComponent } from './referral-list/referral-list.component';
import {ModalModule, TooltipModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NoteSectionComponent,
    ProblemListComponent,
    LabListComponent,
    ReferralListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
