import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
export const router: Routes =[
    {path:'',redirectTo:"",pathMatch:"full"},
    { path: 'home',component: HomeComponent},
    {path:'travel',component: TravelComponent}
]    
export const routes: ModuleWithProviders = RouterModule.forRoot(router);