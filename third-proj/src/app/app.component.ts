import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to third-project app!';

  routes = [
    {linkname:'Home', url:'home'},
    {linkname:'Settings', url:'settings'}
  ]
}
