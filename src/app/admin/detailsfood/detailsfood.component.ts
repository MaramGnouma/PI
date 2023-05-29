import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Models/food';
import { FoodServService } from 'src/app/Services/food-serv.service';

@Component({
  selector: 'app-detailsfood',
  templateUrl: './detailsfood.component.html',
  styleUrls: ['./detailsfood.component.css']
})
export class DetailsfoodComponent implements OnInit {

  constructor(
    private foodserv: FoodServService,
    public activeroute: ActivatedRoute,
  ) {}

  idmateriel!: number;
  food!: Food;
  ngOnInit(): void {
    this.idmateriel = this.activeroute.snapshot.params['id'];

    this.foodserv
      .getfoodsBYID(this.idmateriel)
      .subscribe((data) => (this.food = data));
  }
}
