import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {

  public text: string;
  public header: string;

  public originalText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n' +
    ' industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n' +
    ' scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap\n' +
    ' into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n' +
    ' release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n' +
    ' software like Aldus PageMaker including versions of Lorem Ipsum.';

  public alternativeText = 'It is a long established fact that a reader will be distracted by the readable' +
    ' content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less' +
    ' normal distribution of letters, as opposed to using \'Content here, content here\', making it look like' +
    ' readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default' +
    ' model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.' +
    ' Various versions have evolved over the years, sometimes by accident, sometimes on purpose' +
    ' (injected humour and the like).';

  public originalHeader = 'Build a landing page for your business or project and generate more leads!';

  public alternativeHeader = 'Header Content has changed, as well as the dummy text!';

  public changeText() {
    this.text = this.text === this.originalText ? this.alternativeText : this.originalText;
    this.header = this.header === this.originalHeader ? this.alternativeHeader : this.originalHeader;
  }

  ngOnInit() {
    this.text = this.originalText;
    this.header = this.originalHeader;
  }
}
