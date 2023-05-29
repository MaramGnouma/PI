import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Matériels } from 'src/app/Models/matériels';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';

@Component({
  selector: 'app-detailsmat',
  templateUrl: './detailsmat.component.html',
  styleUrls: ['./detailsmat.component.css']
})
export class DetailsmatComponent implements OnInit {
  constructor(
    public activeroute: ActivatedRoute,
    private materielserv: MaterielServService
  ) {}

  idmateriel!: number;
  materiel!: Matériels;
  ngOnInit(): void {
    this.idmateriel = this.activeroute.snapshot.params['id'];

    this.materielserv.getMatérielsBYID(this.idmateriel)
      .subscribe((data) => (this.materiel = data));
  }


}
