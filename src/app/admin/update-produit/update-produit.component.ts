import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matériels } from 'src/app/Models/matériels';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  id!:number;
  clients!:Matériels;
    constructor(private service:MaterielServService,private route:ActivatedRoute,private router:Router){}
    ngOnInit()
    {
   
      this.id=this.route.snapshot.params['id'];
  
      this.service.getMatérielsBYID(this.id).subscribe(data => {
        console.log(data)
        this.clients=data; 
      }, error =>console.log(error));
     
    }
  
    updateClient()
    {
      this.service.UpdateMatériels(this.id,this.clients).subscribe(data => {
        console.log(data);
        
        this.goToList();
      }, error =>console.log(error));
      
    }
  
    goToList(){
      this.router.navigate(['/dash/listeproduits']);
    }
    onSubmit(){
      this.updateClient();
      this.router.navigate(['/dash/listeproduits']);
    }


}
