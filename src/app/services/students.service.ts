import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student';
import { STUDENTS } from '../data/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getAll(): Observable<Student[]> {
    const students = of(STUDENTS);
    return students;
  }

  save(student: Student) {

  }
}
