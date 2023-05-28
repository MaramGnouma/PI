import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/Models/food';
import { Matériels } from 'src/app/Models/matériels';
import { FoodServService } from 'src/app/Services/food-serv.service';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';
declare var $: any; // Ajout de la déclaration de la variable $ pour jQuery

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent implements OnInit {
  materiels!: Matériels[];
  foods!: Food[];
  constructor(
    private materielServ: MaterielServService,
    private foodServ: FoodServService
  ) {}
  compteurImage = 1;
  totalImage = 5;
  mySource = 'assets/Images/corona1.jpg';

  silder(x: any) {
    this.compteurImage = this.compteurImage + x;
    this.mySource = 'assets/Images/corona' + this.compteurImage + '.jpg';
    if (this.compteurImage >= this.totalImage) {
      this.compteurImage = 1;
    }
    if (this.compteurImage < 1) {
      this.compteurImage = this.totalImage;
    }
  }

  public getMatériels(): void {
    this.materielServ.getMatériels().subscribe((response: Matériels[]) => {
      this.materiels = response;
    });
  }

  public getfoodss(): void {
    this.foodServ.getfoods().subscribe((response: Food[]) => {
      this.foods = response;
    });
  }
  ngOnInit(): void {
    this.getMatériels();

    this.getfoodss();
    $(document).ready(() => {
      $('.sign_in').click(() => {
        $('.login').addClass('active');
        $('.welcome').addClass('active');
        $('.sign_in').addClass('active');
        $('.btn').addClass('active');
        $('.sign_up').addClass('active');
      });

      $('.btn').click(() => {
        $('.sign_up').removeClass('active');
        $('.login').removeClass('active');
        $('.welcome').removeClass('active');
        $('.sign_up').removeClass('active');
        $('.btn').removeClass('active');
        $('.sign_in').removeClass('active');
      });
    });
  }
}
