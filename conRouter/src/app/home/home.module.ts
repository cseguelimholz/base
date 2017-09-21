import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';

const rutas : Routes = [

  { path : 'home',
    component: HomeComponent  
}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)

  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
