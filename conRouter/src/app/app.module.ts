import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntradaComponent } from './entrada/entrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntradaComponent
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
