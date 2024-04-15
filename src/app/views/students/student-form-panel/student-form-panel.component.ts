import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../../models/student';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-student-form-panel',
  templateUrl: './student-form-panel.component.html',
  styleUrl: './student-form-panel.component.css'
})
export class StudentFormPanelComponent {
  studentForm!: FormGroup;
  @Output() formValuesEmitter = new EventEmitter<Student>();

  constructor(
    private studentsService: StudentsService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentFormPanelComponent>
  ) { }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.studentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      grade: ['']
    })
  }

  save() {
    const values: Student = this.studentForm.value;
    this.formValuesEmitter.emit(values);
    this.dialogRef.close();
  }
}
