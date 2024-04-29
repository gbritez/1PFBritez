import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFormPanelComponent } from './students-form-panel.component';

describe('StudentFormPanelComponent', () => {
  let component: StudentsFormPanelComponent;
  let fixture: ComponentFixture<StudentsFormPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsFormPanelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentsFormPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
