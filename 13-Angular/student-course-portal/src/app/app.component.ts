import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,
  StudentDashboardComponent,
  CourseListComponent,
  StudentProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-course-portal';
}
