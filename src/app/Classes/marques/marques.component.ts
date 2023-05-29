import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css'],
})
export class MarquesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  sponsors = [
    {
      name: 'Sponsor 1',
      image: 'assets/1.png',
    },
    {
      name: 'Sponsor 2',
      image: 'assets/2.png',
    },
    {
      name: 'Sponsor 3',
      image: 'assets/lysi.png',
    },
    {
      name: 'Sponsor 4',
      image: 'assets/iron.png',
    },
    {
      name: 'Sponsor 5',
      image: 'assets/scitec.png',
    },
  ];
}
