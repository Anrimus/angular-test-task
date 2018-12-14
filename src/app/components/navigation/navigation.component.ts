import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() bgColorEmitter = new EventEmitter();

  public changeBg() {
    this.bgColorEmitter.emit();
  }
}
