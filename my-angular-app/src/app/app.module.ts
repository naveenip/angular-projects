import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
//import { ChartModule } from 'angular-highcharts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { HttpClient } from 'selenium-webdriver/http';
import { SearchBookComponent } from './search-book/search-book.component';
import { Chart } from 'chart.js';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookStoreComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    ViewNotFoundComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Chart,
    ReactiveFormsModule
  ],
  scripts: ["../node_modules/chart.js/dist/Chart.min.js"],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
