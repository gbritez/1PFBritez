import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material.module';
import { StudentsComponent } from './views/students/students.component';
import { StudentFormPanelComponent } from './views/students/student-form-panel/student-form-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransformNamePipe } from './common/pipes/transform-name.pipe';
import { TitleDirective } from './common/directives/title.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormPanelComponent,
    TransformNamePipe,
    TitleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
