import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModuleModule } from 'src/app/view-module/view-module.module';
import { HelperService } from 'src/app/helper.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    InvalidPageComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ViewModuleModule,
    HttpClientModule
 
  ],
  providers: [ HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
