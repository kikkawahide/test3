import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <h1>{{title}}</h1>
          
          <router-outlet></router-outlet>
          `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!(test)';
}
