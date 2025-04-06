import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PaymentComponent } from './payment/payment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  {
    path: "",
    component:HomePageComponent
   
  },
  {
    path: "AboutUs",
    component:AboutUsComponent
   
  },
  {
    path: "ContactUs",
    component:ContactUsComponent
   
  },
  {
    path: "Testimonials",
    component:TestimonialsComponent
   
  },
  {
    path: "Payment",
    component:PaymentComponent
   
  },
  {
    path: "UserProfile",
    component:UserProfileComponent
  },
  {
    path: "Trips",
    component:TripsComponent
  },
  {
    path: "Payment",
    component:PaymentComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
