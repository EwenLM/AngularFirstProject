import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristiques',
  imports: [],
  templateUrl: './caracteristiques.component.html',
  styleUrl: './caracteristiques.component.css',
})
export class CaracteristiquesComponent implements OnInit {
  chevalName: string = 'belzebuth';
  chevalType: string = 'pur-sang';
  constructor() {}
  ngOnInit() {}
}
