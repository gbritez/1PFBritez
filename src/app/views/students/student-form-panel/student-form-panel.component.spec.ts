import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormPanelComponent } from './student-form-panel.component';

describe('StudentFormPanelComponent', () => {
  let component: StudentFormPanelComponent;
  let fixture: ComponentFixture<StudentFormPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentFormPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFormPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
