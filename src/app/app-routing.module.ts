import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [

  {
    path: "",
    component:LoginComponent
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
    loadChildren:()=>AdminModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
