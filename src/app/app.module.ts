import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { PortfolioComponent } from './shared/component/portfolio/portfolio.component';
import { MaterialModule } from './material/material';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
