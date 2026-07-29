import { FormsModule } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit, OnDestroy {

  // String Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-way Binding
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {
    console.log('StudentDashboardComponent initialized - courses loaded');
  }

  ngOnDestroy(): void {
    console.log('StudentDashboardComponent destroyed');
  }

}

/*
Property Binding [property]
---------------------------
One-way binding from Component → HTML.

Two-Way Binding [(ngModel)]
---------------------------
Keeps the Component and HTML synchronized in both directions.
*/