import { Component } from '@angular/core';
import { Project } from '../project.model';
@Component({
  selector: 'app-rrs',
  templateUrl: './rrs.component.html',
  styleUrl: './rrs.component.scss'
})
export class RrsComponent {
  projects: Project[] = [
    {
      title: '1.  Utilaje pentru lucrări mici sau mari',
      description: 'SCHAEFF HR 16',
      imageUrl: 'https://github.com/aalexeee22/Proiect-tehnici-web/blob/main/imagini/schaeff_hr_16.jpeg?raw=true'
    },
    {
      title: '2. Utilaje pentru deszăpeziri',
      description: 'Oricând la nevoie!',
      imageUrl: 'https://github.com/aalexeee22/Proiect-tehnici-web/blob/main/imagini/utilaje.jpeg?raw=true'
    },
    {
      title: '3. Lucrări pentru firme',
      description: 'Lisa Dräxlmaier',
      imageUrl: 'https://raw.githubusercontent.com/aalexeee22/Proiect-tehnici-web/main/imagini/draxlmaier.jpeg'
    }  
  ];
}
