import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardteacherComponent } from './dashboardteacher.component';

describe('DashboardteacherComponent', () => {
  let component: DashboardteacherComponent;
  let fixture: ComponentFixture<DashboardteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardteacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
