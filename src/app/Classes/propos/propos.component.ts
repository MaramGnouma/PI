import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.component.html',
  styleUrls: ['./propos.component.css'],
})
export class ProposComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    console.log(`Ajout de au panier`);
  }
}
