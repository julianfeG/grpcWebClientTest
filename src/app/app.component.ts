import { Component } from '@angular/core';
import { HelloWorldService } from './services/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(client: HelloWorldService) {
    client.hello("Hello");
  }
}
