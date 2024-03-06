import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalgenericComponent } from './modalgeneric.component';

describe('ModalgenericComponent', () => {
  let component: ModalgenericComponent;
  let fixture: ComponentFixture<ModalgenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalgenericComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalgenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
