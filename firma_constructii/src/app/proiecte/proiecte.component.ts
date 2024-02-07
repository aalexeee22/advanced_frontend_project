import { Component, Input } from '@angular/core';
import { Project } from '../project.model';
@Component({
  selector: 'app-proiecte',
  templateUrl: './proiecte.component.html',
  styleUrl: './proiecte.component.scss'
})
export class ProiecteComponent {
  constructor() {
    this.project = {} as Project; 
  }
  @Input() project: Project; // Input pentru a primi detalii despre proiect din componenta părinte
}
