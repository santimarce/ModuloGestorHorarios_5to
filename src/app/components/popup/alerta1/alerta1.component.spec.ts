import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alerta1Component } from './alerta1.component';

describe('Alerta1Component', () => {
  let component: Alerta1Component;
  let fixture: ComponentFixture<Alerta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alerta1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alerta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
