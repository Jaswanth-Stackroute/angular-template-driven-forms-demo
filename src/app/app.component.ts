import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-demo';

  topics =["Angular","React","Vue"];
  userModel = new User('Jaswanth','abc@gamil.com',1234241,'Angular',true);
}
