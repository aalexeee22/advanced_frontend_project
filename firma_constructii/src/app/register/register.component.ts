import { Component } from '@angular/core';
import { User} from '../user';
import {AutentificareService} from '../autentificare.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  submitted=false;
  userModel=new User('adresa@provider.com','parola');
  constructor(private _autentificareService:AutentificareService){}
  onSubmit(){
    this.submitted=true;
    this._autentificareService.auten(this.userModel).subscribe(data=>console.log('succes!',data),error=>console.log('eroare!',error))
  }
}
