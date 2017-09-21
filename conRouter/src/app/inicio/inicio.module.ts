import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import {SharedModule} from './../shared/shared.module';
import { CabeceraComponent } from './pantalla/cabecera/cabecera.component';
import { ContenidoComponent } from './pantalla/contenido/contenido.component';
import{Routes,RouterModule} from '@angular/router';


/** carga lazi load ¨"loadChildren" */
const rutas: Routes = [
  {
    path : '',
    loadChildren: './../home/home.module#HomeModule'
  },
  {
    path : 'login',
    loadChildren: './../seguridad/seguridad.module#SeguridadModule'
  },
   {
    path : 'contacto',
    loadChildren: './../contacto/contacto.module#ContactoModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
    SharedModule

   
  ],
  declarations: [
    InicioComponent,
    CabeceraComponent,
    ContenidoComponent
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
