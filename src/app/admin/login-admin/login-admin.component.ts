import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
  this.loginForm = this.fb.nonNullable.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })
}

  onSubmit()
  {


if (this.loginForm.invalid) {
  // Afficher une erreur ou une notification si le formulaire est invalide
  alert("Password or Username is incorrect ");
}

const username = this.loginForm.controls['username'].value;
const password = this.loginForm.controls['password'].value;

// Vérifier le nom d'utilisateur et le mot de passe
if (username === 'nour' && password === '12345') {
  // Connecter l'utilisateur
  console.log('Connecté');
  this.router.navigate(['/dash']);

} else {
  // Afficher une erreur si les informations d'identification sont incorrectes
  alert("Password or Username is incorrect ");
  console.log('Nom d\'utilisateur ou mot de passe incorrect');
  this.loginForm.reset();


}
  }
}

