import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer-app';
  refresh(){
    alert("Timer expired, you can execute business logic.")
  }
  refresh_invisible_Timer(){
    alert("Invisible Timer expired, you can execute business logic.")
  }
}
