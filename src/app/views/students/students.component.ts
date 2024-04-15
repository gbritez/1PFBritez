import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormPanelComponent } from './student-form-panel/student-form-panel.component';
import { STUDENTS } from '../../data/mock-students';
import { Student } from '../../models/student';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: any;
  columns: string[] = ['name', 'age', 'grade'];
  constructor(
    private studentsService: StudentsService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(STUDENTS)
    // this.studentsService.getAll().subscribe({
    //   next: data => {
    //     this.dataSource = data
    //   },
    //   error: error => {
    //     console.log(error)
    //   }
    // })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentFormPanelComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.componentInstance.formValuesEmitter.subscribe((formValues: Student) => {
      const newData = [...this.dataSource];
      newData.push(formValues);
      this.dataSource = newData;
      this.cdr.detectChanges();
    });

  }

}

