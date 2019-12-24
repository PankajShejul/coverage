import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoverageComponent } from './coverage/coverage.component';
import { AddOnCoverageComponent } from './add-on-coverage/add-on-coverage.component';
import { Change } from './change.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoverageComponent,
    AddOnCoverageComponent,
    Change
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
