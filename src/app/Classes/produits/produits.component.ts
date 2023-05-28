import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Models/food';
import { Matériels } from 'src/app/Models/matériels';
import { FoodServService } from 'src/app/Services/food-serv.service';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  materiels!: Matériels[];
  foods: Food[] = [];

  checkfood: boolean = true;
  checkmateriel: boolean = false;
  chechsante: boolean = false;
  checkperd: boolean = false;
  checkgain: boolean = false;
  chechperf: boolean = false;
  listpanier: any[] = []; // Remplacez le type 'any' par le type approprié pour les produits du panier

  typ!: string;

  key: string = ''; // Ajout de la variable key pour la clé de recherche
  filTabFood: Food[] = []; // Initialisation de filTabFood avec un tableau vide
  filTabMateriel: Matériels[] = []; // Initialisation de filTabMateriel avec un tableau vide

  constructor(
    private materielServ: MaterielServService,
    public activeroute: ActivatedRoute,
    private foodServ: FoodServService
  ) {}

  ngOnInit(): void {
    this.getMatériels();
    this.getfoodss();
  }

  public getMatériels(): void {
    this.materielServ.getMatériels().subscribe((response: Matériels[]) => {
      this.materiels = response;
      this.filTabMateriel = this.materiels;
    });
  }

  public getfoodss(): void {
    this.foodServ.getfoods().subscribe((response: Food[]) => {
      this.foods = response;
      // Initialisation de filTabFood avec les foods
      this.filTabFood = this.foods;
      this.typ = this.activeroute.snapshot.params['sante'];

      console.log(this.typ);
      if (this.typ == 'sante') {
        this.chechsante = true;
        this.filtreSante();
      } else if (this.typ == 'performance') {
        this.chechperf = true;
        this.filtrePerformance();
      } else if (this.typ == 'perd') {
        this.checkperd = true;
        this.filtrePerdre();
      } else if (this.typ == 'prise') {
        this.checkgain = true;
        this.filtreGain();
      }
    });
  }

  filtreSante(): void {
    this.filTabFood = this.foods.filter((e) => e.type == 'sante');
  }
  filtrePerformance(): void {
    this.filTabFood = this.foods.filter((e) => e.type == 'performance');
  }
  filtrePerdre(): void {
    this.checkperd = true;
    this.filTabFood = this.foods.filter((e) => e.type == 'perd');
  }
  filtreGain(): void {
    this.filTabFood = this.foods.filter((e) => e.type == 'prise');
  }
  addToCart(product: any) {
    // Vérifiez si le produit existe déjà dans le panier
    const existingProduct = this.listpanier.find(item => item.idProduit === product.idProduit);

    if (existingProduct) {
      // Le produit existe déjà dans le panier, augmentez simplement la quantité
      existingProduct.quantite += 1;
    } else {
      // Le produit n'existe pas dans le panier, ajoutez-le avec une quantité de 1
      const newProduct = {
        idProduit: product.idProduit,
        designation: product.designation,
        price: product.prix,
        quantite: 1,
        photo: product.photo
      };

      this.listpanier.push(newProduct);
    }
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

    for (const product of this.listpanier) {
      totalPrice += product.price * product.quantity;
    }

    return totalPrice;
  }
}
