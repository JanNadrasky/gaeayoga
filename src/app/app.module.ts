import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReferencesComponent } from './components/references/references.component';
import { SwiperModule } from 'swiper/angular';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { ContactComponent } from './components/contact/contact.component';
import {LayoutModule} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './components/pricing/pricing.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReferencesComponent,
    ServicesComponent,
    AboutComponent,
    ProfilePhotoComponent,
    ContactComponent,
    PricingComponent,
    SectionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SwiperModule,
    NgxHideOnScrollModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
