import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrl: './acasa.component.scss'
})
export class AcasaComponent {
  constructor(private auth:AuthService){}
  logout():void{
      this.auth.logout();
  }
}
