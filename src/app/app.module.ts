import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuItem } from 'src/components/menuItem/menuItem.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsSection } from './friends-section.component';
import { PersonalDetails } from './personal-details.component';
import { HttpClientModule } from '@angular/common/http';
import { Avatar } from './avatar.component';
import { GoogleMapsModule } from '@angular/google-maps'

import { Gender } from './gender.component';
import { Profile } from './profile.component';
import { DetailsSection } from './details.component';
import { Connections } from './connections.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', component: Profile },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'connections', component: Connections }
]

@NgModule({
  declarations: [
    AppComponent,
    Profile,
    MenuItem,
    PersonalDetails,
    FriendsSection,
    Avatar,
    Gender,
    DetailsSection,
    Connections
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
