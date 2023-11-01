import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginGuard } from './guards/login-guard';
/* import { AuthGuardService } from './guards/auth-guard.service'; */


const routes: Routes = [
  {
    path:'home', component: HomePageComponent
  },
  {
    path:'login', component: LoginPageComponent, canActivate:[LoginGuard]
  },
  {
    path:'private', component: PrivatePageComponent, canActivate: [AuthGuard]
  },
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
