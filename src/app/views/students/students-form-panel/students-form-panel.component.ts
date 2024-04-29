import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../models/student';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from '../../../services/students.service';
import { STUDENTS } from '../../../data/mock-students';

@Component({
  selector: 'app-students-form-panel',
  templateUrl: './students-form-panel.component.html',
  styleUrl: './students-form-panel.component.css'
})
export class StudentsFormPanelComponent {
  studentForm!: FormGroup;
  @Output() formValuesEmitter = new EventEmitter<Student>();

  constructor(
    private studentsService: StudentsService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentsFormPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string, students: Student[] }
  ) { }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const student = this.data.students ? this.data.students.filter(x => x.id === this.data.id)[0] : null;
    this.studentForm = this.fb.group({
      firstName: [student?.firstName || null, Validators.required],
      lastName: [student?.lastName || null, Validators.required],
      age: [student?.age || null, Validators.required],
      grade: [student?.grade || null, Validators.required]
    })
  }

  save() {
    const values: Student = this.studentForm.value;
    this.formValuesEmitter.emit(values);
    this.dialogRef.close();
  }
}
