import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [ './portfolio.component.scss' ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="fa-solid fa-circle-arrow-left fa-2x"></i>', '<i class="fa-solid fa-circle-arrow-right fa-2x"></i>' ],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    responsive: {
      0: {         //mb
        items: 1
      },
      // 400: {
      //   items: 4          // tab
      // },
      // 740: {
      //   items: 5           // 1200px lap
      // },
      // 940: {
      //   items: 1       // 1440px lap 
      // }
    },
    // nav: true
  }
}

