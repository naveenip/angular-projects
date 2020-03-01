import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ViewModModule } from 'src/app/view-mod/view-mod.module';
import { HelperService } from 'src/app/helper.service';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    ViewModModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
