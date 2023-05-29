import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login-admin2',
  templateUrl: './login-admin2.component.html',
  styleUrls: ['./login-admin2.component.css']
})
export class LoginAdmin2Component implements OnInit {

  loginForm!:FormGroup;
  buttonInvalid=false;
  buttonValid=false;


  message:string="";
  role='autre';

  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private router: Router) {
    
   }
  ngOnInit(): void {
    this.loginForm= this.formBuilder.nonNullable.group(
      { username:['',Validators.required],
        password:['',Validators.required],
      }
    ); 
  }
  onSubmit(){
    this.loginService.login(this.loginForm.value['username'],this.loginForm.value['password']).subscribe(
      users=>  { if(users.length==0)
      {
        alert("mot de passe incorrect ");
        this.loginForm.reset();
      }
      else
      this.router.navigate(['/dash']);
      });
      }
 
      
  


}
