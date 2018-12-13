import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isBgRed: Boolean = false;

  public changeColour() {
    console.log('c:', );
    this.isBgRed = !this.isBgRed;
  }
}
