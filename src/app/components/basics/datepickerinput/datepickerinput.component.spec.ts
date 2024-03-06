import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerinputComponent } from './datepickerinput.component';

describe('DatepickerinputComponent', () => {
  let component: DatepickerinputComponent;
  let fixture: ComponentFixture<DatepickerinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
