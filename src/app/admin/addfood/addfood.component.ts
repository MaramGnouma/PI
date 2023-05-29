import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/Models/food';
import { FoodServService } from 'src/app/Services/food-serv.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  clients : Food=new Food();


  // clients !: Client;
   constructor(private serv:FoodServService,private router:Router){}
 
   ngOnInit(): void {
   }
 saveClient()
 {
   this.serv.addfoods(this.clients).subscribe( data=> {
     console.log(data);
     this.goToClientList();
   },
   error => console.log(error));
 }
 
 goToClientList()
 {
   this.router.navigate(['/dash/listeproduits']);
 }
   onSubmit()
   {
 console.log(this.clients);
 this.saveClient();
 this.router.navigate(['/dash/listeproduits']);
   }
 
 }
 