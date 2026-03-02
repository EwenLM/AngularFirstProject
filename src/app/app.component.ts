import { Component } from '@angular/core';
import { RacesComponent } from './races/races.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';

@Component({
  selector: 'app-root',
  imports: [RacesComponent, CaracteristiquesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Course de Chevaux';
	numberOfUsers = 146;
	public name: string ='Olivier';

}
