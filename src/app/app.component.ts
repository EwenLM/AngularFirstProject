import { Component } from '@angular/core';
import { RacesComponent } from './races/races.component';

@Component({
  selector: 'app-root',
  imports: [RacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Course de Chevaux';
	numberOfUsers = 146;
	public name: string ='Olivier';

}
