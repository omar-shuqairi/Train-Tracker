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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
