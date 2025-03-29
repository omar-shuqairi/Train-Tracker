import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdmindashboradComponent } from './admindashborad/admindashborad.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageStationsComponent } from './manage-stations/manage-stations.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatestationComponent } from './createstation/createstation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageTripComponent } from './manage-trip/manage-trip.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { ApprovedTestimonialsAdminComponent } from './approved-testimonials-admin/approved-testimonials-admin.component';
import { PendingTestimonialsComponent } from './pending-testimonials/pending-testimonials.component';
import { RejectedTestimonialsComponent } from './rejected-testimonials/rejected-testimonials.component';
import { CreatetripComponent } from './createtrip/createtrip.component';
import { SearchTripComponent } from './search-trip/search-trip.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';




@NgModule({
  declarations: [
    AdmindashboradComponent,
    SidebarComponent,
    ManageStationsComponent,
    CreatestationComponent,
    ManageTripComponent,
    ManagePagesComponent,
    UsersTableComponent,
    ApprovedTestimonialsAdminComponent,
    PendingTestimonialsComponent,
    RejectedTestimonialsComponent,
    CreatetripComponent,
    SearchTripComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
