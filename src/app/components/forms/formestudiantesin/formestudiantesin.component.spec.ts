import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormestudiantesinComponent } from './formestudiantesin.component';

describe('FormestudiantesinComponent', () => {
  let component: FormestudiantesinComponent;
  let fixture: ComponentFixture<FormestudiantesinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormestudiantesinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormestudiantesinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
