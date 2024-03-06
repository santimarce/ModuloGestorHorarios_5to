import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoinputComponent } from './textoinput.component';

describe('TextoinputComponent', () => {
  let component: TextoinputComponent;
  let fixture: ComponentFixture<TextoinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextoinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
