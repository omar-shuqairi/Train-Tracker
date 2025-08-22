import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboradComponent } from './admindashborad/admindashborad.component';
import { ManageStationsComponent } from './manage-stations/manage-stations.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { ApprovedTestimonialsAdminComponent } from './approved-testimonials-admin/approved-testimonials-admin.component';
import { PendingTestimonialsComponent } from './pending-testimonials/pending-testimonials.component';
import { RejectedTestimonialsComponent } from './rejected-testimonials/rejected-testimonials.component';
import { ManageTripComponent } from './manage-trip/manage-trip.component';
import { SearchTripComponent } from './search-trip/search-trip.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageHomePageComponent } from './manage-home-page/manage-home-page.component';
import { ManageAboutPageComponent } from './manage-about-page/manage-about-page.component';
import { ManageConactPageComponent } from './manage-conact-page/manage-conact-page.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';
import { ContactFormTableComponent } from './contact-form-table/contact-form-table.component';
const routes: Routes = [
  {
    path:'Dashborad',
    component:AdmindashboradComponent
  },
  {
    path:'ManageStations',
    component:ManageStationsComponent
  },
  {
    path:'ManageTrips',
    component:ManageTripComponent
  },
  { path:'UsersTable',
    component: UsersTableComponent
  },
  { path:'ApprovedTestimonialsAdmin',
    component: ApprovedTestimonialsAdminComponent
  },
  { path:'PendingTestimonials',
    component: PendingTestimonialsComponent
  },
  { path:'RejectedTestimonials',
    component: RejectedTestimonialsComponent
  },
  { path:'SearchTrip',
    component: SearchTripComponent
  },
  { path:'AdminProfile',
    component: AdminProfileComponent
  },
  { path:'ManageHomePage',
    component: ManageHomePageComponent
  },
  { path:'ManageAboutPage',
    component: ManageAboutPageComponent
  },
  { path:'ManageContactPage',
    component: ManageConactPageComponent
  },
  { path:'ManageFooter',
    component: ManageFooterComponent
  },
  { path:'ContactFormTable',
    component: ContactFormTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
