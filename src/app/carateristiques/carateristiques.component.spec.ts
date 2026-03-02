import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarateristiquesComponent } from './carateristiques.component';

describe('CarateristiquesComponent', () => {
  let component: CarateristiquesComponent;
  let fixture: ComponentFixture<CarateristiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarateristiquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarateristiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
