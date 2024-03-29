import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SwiperModule } from 'swiper/angular';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import {LayoutModule} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './components/pricing/pricing.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { YogaTypesComponent } from './components/yoga-types/yoga-types.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilePhotoComponent,
    PricingComponent,
    SectionComponent,
    FooterComponent,
    YogaTypesComponent,
    LecturersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SwiperModule,
    NgxHideOnScrollModule,
    LayoutModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
