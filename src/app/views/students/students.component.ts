import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsFormPanelComponent } from './students-form-panel/students-form-panel.component';
import { STUDENTS } from '../../data/mock-students';
import { Student } from '../../models/student';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<Student>;
  columns: string[] = ['name', 'age', 'grade', 'actions'];
  constructor(
    private studentsService: StudentsService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(STUDENTS)
    this.studentsService.getAll().subscribe({
      next: data => {
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'name': return item.firstName + ' ' + item.lastName;
            default: return item[property];
          }
        };
      },
      error: error => {
        console.log(error)
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  new(): void {
    const dialogRef = this.dialog.open(StudentsFormPanelComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.componentInstance.formValuesEmitter.subscribe((formValues: Student) => {
      this.dataSource.data = [...this.dataSource.data, formValues];
      this.cdr.detectChanges();
    });

  }

  edit(rowId: string) {
    const dialogRef = this.dialog.open(StudentsFormPanelComponent, {
      width: '800px',
      data: { id: rowId, students: this.dataSource.data }
    });
    dialogRef.componentInstance.formValuesEmitter.subscribe((formValues: Student) => {
      const data = this.dataSource.data.filter((x: Student) => x.id !== rowId)
      formValues.id = rowId;
      this.dataSource.data = [...data, formValues];
      this.cdr.detectChanges();
    });
  }

  delete(rowId: string) {
    const data = this.dataSource.data.filter((x: Student) => x.id !== rowId);
    this.dataSource.data = data;
    this.cdr.detectChanges();
  }

  search(event: any) {
    const value = event.target.value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

}

