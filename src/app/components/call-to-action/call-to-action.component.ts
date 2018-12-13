import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  public selectedStyle;
  public items = [
    {className: 'w-100', publicName: 'X large'},
    {className: 'w-75', publicName: 'large'},
    {className: 'w-50', publicName: 'medium'},
    {className: 'w-25', publicName: 'small'},
  ];

  ngOnInit() {
    this.selectedStyle = 'w-100';
  }

}
