import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaBotonComponent } from './prueba-boton.component';

describe('PruebaBotonComponent', () => {
  let component: PruebaBotonComponent;
  let fixture: ComponentFixture<PruebaBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
