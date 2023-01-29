import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() username: string = '';

  public isDisabled(): boolean {
    return this.username === '';
  }

  public onButtonClick() {
    this.username = '';
  }
}
