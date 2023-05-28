import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CatégorieIMC } from 'src/app/Models/catégorie-imc';
import { Food } from 'src/app/Models/food';
import { CatagorieServService } from 'src/app/Services/catagorie-serv.service';
import { FoodServService } from 'src/app/Services/food-serv.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  cat!: CatégorieIMC;
  foods!: Food[];
  idcat!: number;
  imc!: string;

  constructor(
    private catServ: CatagorieServService,
    private foodServ: FoodServService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idcat = this.activatedRoute.snapshot.params['id'];
    this.catServ.getCategorieIMC(this.idcat).subscribe((data) => {
      this.cat = data;
      this.getfoods();
    });

    const imcString = this.activatedRoute.snapshot.paramMap.get('imc');
    if (imcString !== null) {
      this.imc = parseFloat(imcString).toFixed(2);
    }
  }

  public getfoods(): void {
    if (this.cat?.nomCategorie.toLowerCase() === 'corpulence normale' || this.cat?.nomCategorie.toLowerCase() === 'Dénutrition') {
      const performanceFoods$ = this.foodServ.getFoodsByType('performance');
      const priseFoods$ = this.foodServ.getFoodsByType('prise');
      forkJoin([performanceFoods$, priseFoods$])
        .subscribe(([perfFoods, priseFoods]) => {
          this.foods = perfFoods.concat(priseFoods);
        });
    } else if (this.cat?.nomCategorie.toLowerCase() === 'surpoids' || this.cat?.nomCategorie.toLowerCase() === 'obésité modérée (classe 1)' || this.cat?.nomCategorie.toLowerCase() === 'obésité sévère (classe 2)'
    || this.cat?.nomCategorie.toLowerCase() === 'obésité morbide ou massive (classe 3)') {
      const perdsDePoidsFoods$ = this.foodServ.getFoodsByType('perds');
      const santeFoods$ = this.foodServ.getFoodsByType('sante');
      forkJoin([perdsDePoidsFoods$, santeFoods$])
        .subscribe(([perdsDePoidsFoods, santeFoods]) => {
          this.foods = perdsDePoidsFoods.concat(santeFoods);
        });
    } else {
      this.foodServ.getfoods().subscribe((response: Food[]) => {
        this.foods = response;
      });
    }
  }
}
