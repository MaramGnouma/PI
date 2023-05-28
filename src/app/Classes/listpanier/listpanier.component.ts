import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listpanier',
  templateUrl: './listpanier.component.html',
  styleUrls: ['./listpanier.component.css']
})
export class ListpanierComponent implements OnInit {
  listpanier: any[] = []; // Remplacez le type 'any' par le type approprié pour les produits du panier

  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(product: any) {
    // Recherchez l'index du produit dans le panier
    const index = this.listpanier.findIndex(item => item.idProduit === product.idProduit);

    if (index !== -1) {
      // Supprimez le produit du panier
      this.listpanier.splice(index, 1);
    }
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.listpanier) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }
}
