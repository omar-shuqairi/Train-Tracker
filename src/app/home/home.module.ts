import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PaymentComponent } from './payment/payment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from '../components/home-components/map/map.component';
import { HerosectionComponent } from '../components/home-components/herosection/herosection.component';
import { SearchTrainStationsComponent } from '../components/home-components/search-train-stations/search-train-stations.component';
@NgModule({
  declarations: [
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    TestimonialsComponent,
    PaymentComponent,
    UserProfileComponent,
    MapComponent,
    HerosectionComponent,
    SearchTrainStationsComponent

    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMapsModule,
    SharedModule
  ]
})
export class HomeModule { }
