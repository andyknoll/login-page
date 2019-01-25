import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LogoComponent } from './logo/logo.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '',           component: SignupComponent },
  { path: 'signup',     component: SignupComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'forgot-pw',  component: ForgotPwComponent },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
