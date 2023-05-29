import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Matériels } from 'src/app/Models/matériels';
import { MaterielServService } from 'src/app/Services/materiel-serv.service';

@Component({
  selector: 'app-details-materiels',
  templateUrl: './details-materiels.component.html',
  styleUrls: ['./details-materiels.component.css']
})
export class DetailsMaterielsComponent implements OnInit {

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
