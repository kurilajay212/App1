import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes} from './app.router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}