import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Models/food';
import { Matériels } from 'src/app/Models/matériels';
import { FoodServService } from 'src/app/Services/food-serv.service';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css'],
})
export class DetailProduitComponent implements OnInit {
  constructor(
    private foodserv: FoodServService,
    public activeroute: ActivatedRoute,
    private materielserv: MaterielServService
  ) {}

  idmateriel!: number;
  materiel!: Matériels;
  food!: Food;
  ngOnInit(): void {
    this.idmateriel = this.activeroute.snapshot.params['id'];

    this.foodserv
      .getfoodsBYID(this.idmateriel)
      .subscribe((data) => (this.food = data));
  }
}
