import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookedComponent } from './booked/booked.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsingleComponent } from './roomsingle/roomsingle.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'room',component:RoomsComponent},
  {path:'booked',component:BookedComponent},
  {path:'singleroom/:rid',component:RoomsingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
