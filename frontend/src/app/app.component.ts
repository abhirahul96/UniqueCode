import { Component } from '@angular/core';

declare var require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sugar';
  img = '/frontend/src/img/man.png'
}
