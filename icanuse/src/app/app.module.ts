import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnterFeaturesComponent } from './enter-features/enter-features.component';
import { BrowserSupportComponent } from './browser-support/browser-support.component';
import { AvailableFeaturesComponent } from './available-features/available-features.component';
import { CaniuseDataService } from './caniuse-data.service';
import { ObjNgForPipe } from './obj-ng-for.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnterFeaturesComponent,
    BrowserSupportComponent,
    AvailableFeaturesComponent,
    ObjNgForPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CaniuseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
