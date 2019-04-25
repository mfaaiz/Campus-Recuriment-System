import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import { AdminComponent, StudentComponent, CompanyComponent } from './containers';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent ,canActivate:[AuthGuard]},
  {path:'student',component:StudentComponent ,canActivate:[AuthGuard]},
  {path:'company',component:CompanyComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
