import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  checktous: boolean = true;

  typ!: string;

  key: string = ''; // Ajout de la variable key pour la clé de recherche
  filTabFood: Food[] = []; // Initialisation de filTabFood avec un tableau vide
  filTabMateriel: Matériels[] = []; // Initialisation de filTabMateriel avec un tableau vide

  produitDetailleAchat!: FormGroup;
  constructor(
    private materielServ: MaterielServService,
    public activeroute: ActivatedRoute,
    private foodServ: FoodServService,
    public router: Router
  ) {}

  produit!: Matériels;
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
  filtreTous(): void {
    this.filTabFood = this.foods;
  }

  addtoCart() {
    console.log(this.produit);
    let cart: Matériels[] = JSON.parse(localStorage.getItem('cart') || '[]');
    let x: any = JSON.parse(localStorage.getItem('quantite') || '[]');

    if (
      cart.filter((e) => e.idProduit != this.produit.idProduit).length ==
      cart.length
    ) {
      cart.push(this.produit);
      x.push([
        this.produitDetailleAchat.value['quantite'],
        this.produit.idProduit,
      ]);
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('quantite', JSON.stringify(x));

      alert('Product added to cart!');
    } else alert('Product already in Cart!');

    // this.router.navigate(['/store']);
  }
}