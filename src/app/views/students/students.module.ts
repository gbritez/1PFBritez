import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsFormPanelComponent } from './students-form-panel/students-form-panel.component'
import { MaterialModule } from '../../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleDirective } from '../../shared/directives/title.directive';
import { TransformNamePipe } from '../../shared/pipes/transform-name.pipe';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormPanelComponent,
    TransformNamePipe,
    TitleDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    StudentsComponent,
    StudentsFormPanelComponent
  ]
})
export class StudentsModule { }
