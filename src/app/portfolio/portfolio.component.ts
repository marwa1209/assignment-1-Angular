import { Paths } from './../paths';
import { Component } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  srcs: Paths[] = [
    { imgpath: './assets/images/poert1.png', alt: 'img-1' },
    { imgpath: './assets/images/port2.png', alt: 'img-2' },
    { imgpath: './assets/images/port3.png', alt: 'img-3' },
    { imgpath: './assets/images/poert1.png', alt: 'img-4' },
    { imgpath: './assets/images/port2.png', alt: 'img-5' },
    { imgpath: './assets/images/port3.png', alt: 'img-6' },
  ];
}
