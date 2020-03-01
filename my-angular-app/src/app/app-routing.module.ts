import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BookStoreComponent } from 'src/app/book-store/book-store.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { HelpComponent } from 'src/app/help/help.component';
import { ViewNotFoundComponent } from 'src/app/view-not-found/view-not-found.component';
import { SearchBookComponent } from 'src/app/search-book/search-book.component';


const routes: Route[] = [
  {path:"", redirectTo:"\home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"books", component:BookStoreComponent},
  {path:"searchBook", component:SearchBookComponent},
  {path:"about", component:AboutComponent},
  {path:"help", component: HelpComponent},
  {path:"**", component:ViewNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
