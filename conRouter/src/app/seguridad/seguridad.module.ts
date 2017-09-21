import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {Routes,RouterModule } from '@angular/router';

const rutas : Routes = [

  { path : '',
    component: LoginComponent
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  declarations: [LoginComponent]
})
export class SeguridadModule { }
