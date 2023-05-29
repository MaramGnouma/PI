import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  idModif!:number;

  formModifier!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: LoginService
  ) {}
  ngOnInit(): void {
    this.formModifier = this.fb.nonNullable.group({
      id:[1],
      password: ['',[Validators.required, Validators.minLength(6)]],
      passwordancien:['',Validators.required],
      passwordConfirm: ['',[Validators.required, Validators.minLength(6)]],
    });
  }
  /*modifier() {
    console.log(
      this.formModifier.value['password'] ==
        this.formModifier.value['passwordConfirm']
    );
    let x: any = JSON.parse(localStorage.getItem('admin') || '[]');
    let admin: Admin = x[0];
    if (
      this.formModifier.value['password'] ==
      this.formModifier.value['passwordConfirm']
    ) {
      //admin.password = this.formModifier.value['password'];
      this.userService.modifUser(admin).subscribe((data) => console.log(data));
      this.router.navigate(['/login']);
    }
  }*/

  modifierr()
  {
    console.log(
      this.formModifier.value['password'] ==
        this.formModifier.value['passwordConfirm']
    );

    if(this.formModifier.value['password'] ==
    this.formModifier.value['passwordConfirm'])
    {
    this.idModif=this.formModifier.get("id")?.value;

    this.userService.updatePass(this.idModif,this.formModifier.value).subscribe(
      data=>this.router.navigate(['/dash'])
    );
    }
    else
    alert('Erreur');
}

get password(){
  return this.formModifier.get('password');
  }

  get passwordConfirm(){
    return this.formModifier.get('passwordConfirm');
    }

}
