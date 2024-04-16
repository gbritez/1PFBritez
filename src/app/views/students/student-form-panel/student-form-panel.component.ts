import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../../models/student';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../../services/students.service';
import { STUDENTS } from '../../../data/mock-students';

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
    public dialogRef: MatDialogRef<StudentFormPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string, students: Student[] }
  ) { }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const student = this.data.students ? this.data.students.filter(x => x.id === this.data.id)[0] : null;
    this.studentForm = this.fb.group({
      firstName: [student?.firstName || null],
      lastName: [student?.lastName || null],
      age: [student?.age || null],
      grade: [student?.grade || null]
    })
  }

  save() {
    const values: Student = this.studentForm.value;
    this.formValuesEmitter.emit(values);
    this.dialogRef.close();
  }
}
