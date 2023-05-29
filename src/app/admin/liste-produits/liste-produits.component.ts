import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/Models/food';
import { Matériels } from 'src/app/Models/matériels';
import { FoodServService } from 'src/app/Services/food-serv.service';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  clients!:Matériels[];
  foods!:Food[];

  constructor(private clientservice:MaterielServService,private router:Router,private servfood:FoodServService){}
  
  private getClients()
  {
    this.clientservice.getMatériels().subscribe(data=> {
      this.clients = data;
    });
  }

  private getFood()
  {
    this.servfood.getfoods().subscribe(data=> {
      this.foods = data;
    });
  }
  
  ngOnInit(): void {
    this.getClients();
    this.getFood();
  }  
  updateClient(id:number){
    this.router.navigate(['updateproduit',id]);
  }

  deleteClient(id:number){
    this.clientservice.RemoveMatériels(id).subscribe(data=> {
      console.log(data);
      this.getClients();
    })
  }


  updateFood(id:number){
    this.router.navigate(['updateproduit',id]);
  }

  deleteFood(id:number){
    this.servfood.Removefoods(id).subscribe(data=> {
      console.log(data);
      this.getFood();
    })
  }


  detailMateriel(id:number){
    this.router.navigate(['prod',id]);

  }
  detailfood(id:number){
    this.router.navigate(['prod',id]);

  }

}

