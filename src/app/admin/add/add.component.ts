import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matériels } from 'src/app/Models/matériels';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


 //materiels : Matériels = new Matériels();


 clients : Matériels=new Matériels ();


 // clients !: Client;
  constructor(private serv:MaterielServService,private router:Router){}

  ngOnInit(): void {
  }
saveClient()
{
  this.serv.addMatériels(this.clients).subscribe( data=> {
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
