import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CatégorieIMC } from 'src/app/Models/catégorie-imc';
import { Food } from 'src/app/Models/food';
import { Sport } from 'src/app/Models/sport';
import { CatagorieServService } from 'src/app/Services/catagorie-serv.service';
import { FoodServService } from 'src/app/Services/food-serv.service';
import { SportservService } from 'src/app/Services/sportserv.service';

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
  filTabSport: Sport[] = [];
  sports: Sport[] = [];

  constructor(
    private catServ: CatagorieServService,
    private foodServ: FoodServService,
    private activatedRoute: ActivatedRoute,
    private sportServ: SportservService
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

  getSports(): void {
    this.sportServ.getAllSports().subscribe((response: Sport[]) => {
      this.sports = response;
      this.filtreSport();
    });
  }

  filtreSport(): void {
    if (this.cat !== undefined && this.cat.nomCategorie !== undefined) {
      this.filTabSport = this.sports.filter((e) => e.type.toLowerCase() === this.cat.nomCategorie.toLowerCase());
    }
  }

  getfoods(): void {
    if (this.cat !== undefined && this.cat.nomCategorie !== undefined) {
      const categorieLowerCase = this.cat.nomCategorie.toLowerCase();
      if (categorieLowerCase === 'corpulence normale' || categorieLowerCase === 'dénutrition') {
        const performanceFoods$ = this.foodServ.getFoodsByType('performance');
        const priseFoods$ = this.foodServ.getFoodsByType('prise');
        forkJoin([performanceFoods$, priseFoods$]).subscribe(([perfFoods, priseFoods]) => {
          this.foods = perfFoods.concat(priseFoods);
          this.getSports();
        });
      } else if (
        categorieLowerCase === 'surpoids' ||
        categorieLowerCase === 'obésité modérée (classe 1)' ||
        categorieLowerCase === 'obésité sévère (classe 2)' ||
        categorieLowerCase === 'obésité morbide ou massive (classe 3)'
      ) {
        const perdsDePoidsFoods$ = this.foodServ.getFoodsByType('perds');
        const santeFoods$ = this.foodServ.getFoodsByType('sante');
        forkJoin([perdsDePoidsFoods$, santeFoods$]).subscribe(([perdsDePoidsFoods, santeFoods]) => {
          this.foods = perdsDePoidsFoods.concat(santeFoods);
          this.getSports(); // Appel de la méthode pour récupérer les sports après avoir obtenu les aliments
        });
      } else {
        this.foodServ.getfoods().subscribe((response: Food[]) => {
          this.foods = response;
          this.getSports(); // Appel de la méthode pour récupérer les sports après avoir obtenu les aliments
        });
      }
    }
  }
  
}