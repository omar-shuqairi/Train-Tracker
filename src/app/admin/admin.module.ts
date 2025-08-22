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
import { UsersTableComponent } from './users-table/users-table.component';
import { ApprovedTestimonialsAdminComponent } from './approved-testimonials-admin/approved-testimonials-admin.component';
import { PendingTestimonialsComponent } from './pending-testimonials/pending-testimonials.component';
import { RejectedTestimonialsComponent } from './rejected-testimonials/rejected-testimonials.component';
import { CreatetripComponent } from './createtrip/createtrip.component';
import { SearchTripComponent } from './search-trip/search-trip.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageHomePageComponent } from './manage-home-page/manage-home-page.component';
import { ManageAboutPageComponent } from './manage-about-page/manage-about-page.component';
import { ManageConactPageComponent } from './manage-conact-page/manage-conact-page.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';
import { ContactFormTableComponent } from './contact-form-table/contact-form-table.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdmindashboradComponent,
    SidebarComponent,
    ManageStationsComponent,
    CreatestationComponent,
    ManageTripComponent,
    UsersTableComponent,
    ApprovedTestimonialsAdminComponent,
    PendingTestimonialsComponent,
    RejectedTestimonialsComponent,
    CreatetripComponent,
    SearchTripComponent,
    AdminProfileComponent,
    ManageHomePageComponent,
    ManageAboutPageComponent,
    ManageConactPageComponent,
    ManageFooterComponent,
    ContactFormTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule
  ]
})
export class AdminModule { }
