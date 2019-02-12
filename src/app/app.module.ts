import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
    apiKey: "AIzaSyBBDTDKEvW9IbY8l0B4Os4uDkXRYyHbFqU",
    authDomain: "fitness-app-b8c12.firebaseapp.com",
    databaseURL: "https://fitness-app-b8c12.firebaseio.com",
    projectId: "fitness-app-b8c12",
    storageBucket: "fitness-app-b8c12.appspot.com",
    messagingSenderId: "743293821943"
  };


*/
