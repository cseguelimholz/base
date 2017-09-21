import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InicioModule} from './inicio/inicio.module';
import {InicioComponent} from  './inicio/inicio.component';




@NgModule({
  declarations: [
    
 ],
  imports: [
    BrowserModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
