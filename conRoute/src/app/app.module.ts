import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutModule} from '../app/layout/layout.module';
import {MascaraComponent} from '../app/layout/mascara/mascara.component';


@NgModule({
  declarations: [
 
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [MascaraComponent]
})
export class AppModule { }
