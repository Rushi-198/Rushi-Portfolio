import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {

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
    // autoplaySpeed: 500,
    responsive: {
      0: {         //mb
        items: 2
      },
      400: {
        items: 4          // tab
      },
      740: {
        items: 5           // 1200px lap
      },
      940: {
        items: 6        // 1440px lap 
      }
    },
    nav: true
  }
}


