import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


//shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    { 
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]
    }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBBDTDKEvW9IbY8l0B4Os4uDkXRYyHbFqU",
    authDomain: "fitness-app-b8c12.firebaseapp.com",
    databaseURL: "https://fitness-app-b8c12.firebaseio.com",
    projectId: "fitness-app-b8c12",
    storageBucket: "fitness-app-b8c12.appspot.com",
    messagingSenderId: "743293821943"
  };

//Feacture module.
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    declarations: [],
    providers: []
})
export class AuthModule {}
