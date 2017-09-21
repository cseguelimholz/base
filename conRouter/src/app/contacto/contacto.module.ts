import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social/social.component';
import {Routes,RouterModule} from '@angular/router';



const rutas : Routes = [

  { path : '',
    component: SocialComponent  
}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  declarations: [SocialComponent]
})
export class ContactoModule { }
