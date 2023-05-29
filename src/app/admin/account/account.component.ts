import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  ngOnInit(): void {}
/*
  accountForm!:FormGroup;
  constructor(private fb:FormBuilder, private loginService:LoginService) { }

  ngOnInit(): void {
    this.accountForm=this.fb.nonNullable.group({
      username:[this.loginService.user.username],
      email:[this.loginService.user.email],
      newPassword:[""],
      confirmNewPassword:['']
    })
  }
  updatePassword()
  {

        if(this.accountForm.get('newPassword')?.value==this.accountForm.get('confirmNewPassword')?.value)
        {
          this.loginService.user.password=this.accountForm.get('newPassword')?.value;
          this.loginService.updateProduit();
          alert("Password Changed");

        }
    
    else
    {
      alert("Wrong Confirm Password");
    }
  }*/

}
