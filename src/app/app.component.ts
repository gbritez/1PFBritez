import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  opened: boolean = false;
  @ViewChild(MatSidenav) sidenav?: MatSidenav;
  title = '1PFBritez';
}
