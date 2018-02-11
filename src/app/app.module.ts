import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
    
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }

