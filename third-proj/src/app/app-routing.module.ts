import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { InvalidPageComponent } from 'src/app/invalid-page/invalid-page.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { VcompComponent } from 'src/app/view-module/vcomp/vcomp.component';


const routes: Route[] = [
  //{path:'', component: HomeComponent },
  //{path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'gituser', component: VcompComponent},
  
  {
    path:'settings', 
    component: SettingsComponent,
    children:[
      {path:'', redirectTo:'profile', pathMatch:'full'},
      {path:'**', component: InvalidPageComponent },
      {path:'profile', component:ProfileComponent},
      {path:'contact', component:ContactComponent}
    ]
  },
  {path:'**', component: InvalidPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
