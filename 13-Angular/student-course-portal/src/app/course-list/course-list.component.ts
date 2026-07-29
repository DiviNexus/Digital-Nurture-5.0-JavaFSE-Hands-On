import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent, 
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Java', code: 'JAVA201', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Spring Boot', code: 'SPR301', credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'SQL', code: 'SQL101', credits: 2, gradeStatus: 'passed' },
    { id: 5, name: 'Microservices', code: 'MIC401', credits: 4, gradeStatus: 'pending' }
  ];

  selectedCourseId?: number;

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy improves performance by re-rendering only changed items.
  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}