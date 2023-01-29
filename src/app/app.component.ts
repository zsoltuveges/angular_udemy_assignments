import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public detailsToggle: boolean = false;
  public clickEvents: Date[] = [];

  public onClick() {
    this.detailsToggle = !this.detailsToggle;
    this.logClickEvent();
  }

  public logClickEvent() {
    this.clickEvents.push(new Date(Date.now()));
  }
}
