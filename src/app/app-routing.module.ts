import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { athurizationGuard } from './athurization.guard';

const routes: Routes = [

  {
    path: "",
    component:HomePageComponent
  },
  {
    path:"sign",
    loadChildren:()=>AuthModule

  },
  {
    path:"home",
    loadChildren:()=>HomeModule

  },
  {
    path:'admin',
    loadChildren:()=>AdminModule,
    canActivate:[athurizationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
