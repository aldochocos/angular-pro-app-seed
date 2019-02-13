import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { RegisterComponent } from './containers/register/register.component';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: RegisterComponent }
];

//Feacture module.
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        RegisterComponent
    ]
    
})
export class RegisterModule {}