import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonsimpleComponent } from './botonsimple.component';

describe('BotonsimpleComponent', () => {
  let component: BotonsimpleComponent;
  let fixture: ComponentFixture<BotonsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonsimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
