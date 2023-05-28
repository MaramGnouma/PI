import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  poids!: number;
  taille!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public calculerIMC(): void {
    const tailleEnMetres = this.taille / 100;
    const imc = this.poids / (tailleEnMetres * tailleEnMetres);
    let catId = '0'; // Initialize with a default value
    console.log(imc);
    if (imc < 18.5) {
      catId = '3';
    } else if (18.5 <= imc && imc < 25) {
      catId = '1';
    } else if (25 <= imc && imc < 30) {
      catId = '4';
    } else if (30 <= imc && imc < 34.9) {
      catId = '5';
    } else if (35 <= imc && imc < 39.9) {
      catId = '6';
    } else if (imc >= 40) {
      catId = '7';
    }
    this.router.navigate(['/categorie', catId, {imc: imc}]);
  }
  
  

}
