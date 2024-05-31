import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdocentesComponent } from './formdocentes.component';

describe('FormdocentesComponent', () => {
  let component: FormdocentesComponent;
  let fixture: ComponentFixture<FormdocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormdocentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormdocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
