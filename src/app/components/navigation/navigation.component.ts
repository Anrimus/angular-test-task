import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() bgColorEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changeBg() {
    this.bgColorEmitter.emit();
  }
}
