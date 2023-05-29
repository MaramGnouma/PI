import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  imcForm!: FormGroup;
  taille!: number;
  poids!: number;
  tailleErrorMessage: string = '';
  poidsErrorMessage: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.imcForm = this.formBuilder.group({
      poids: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      taille: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  public calculerIMC(): void {
    if (this.imcForm.valid) {
      const poids = this.imcForm.get('poids')!.value;
      const taille = this.imcForm.get('taille')!.value;
      const tailleEnMetres = taille / 100;
      const imc = poids / (tailleEnMetres * tailleEnMetres);
      let catId = '0'; // Initialise avec une valeur par défaut

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

      this.router.navigate(['/categorie', catId, { imc: imc }]);
    }
  }

  public isValidtaille(): boolean {
    const tailleFormControl: AbstractControl | null = this.imcForm.get('taille');
    if (tailleFormControl?.errors?.['required']) {
      this.tailleErrorMessage = 'La taille est requise.';
    } else if (tailleFormControl?.errors?.['pattern']) {
      this.tailleErrorMessage = 'La taille doit être un nombre valide.';
    } else {
      this.tailleErrorMessage = '';
      
    }
    return tailleFormControl?.touched ?? false;
  }

  public isValidpoids(): boolean {
    const poidsFormControl: AbstractControl | null = this.imcForm.get('poids');
    if (poidsFormControl?.errors?.['required']) {
      this.poidsErrorMessage = 'Le poids est requis.';
    } else if (poidsFormControl?.errors?.['pattern']) {
      this.poidsErrorMessage = 'Le poids doit être un nombre valide.';
    } else {
      this.poidsErrorMessage = '';
    }
    return poidsFormControl?.touched ?? false;
  }
}
