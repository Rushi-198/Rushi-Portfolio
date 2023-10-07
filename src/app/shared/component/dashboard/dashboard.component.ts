import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngOnInit(): void {
  }


  ngAfterViewInit(): void {


    var textWrapper = document.querySelector('.ml2');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.ml2 .letter',
        scale: [ 4, 1 ],
        opacity: [ 0, 1 ],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el: any, i: any) => 70 * i
      }).add({
        targets: '.ml2',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }
}