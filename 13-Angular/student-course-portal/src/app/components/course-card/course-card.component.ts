import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule,
            CreditLabelPipe,
            HighlightDirective
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {

  isExpanded = false;

  @Input()
  course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
  };

  @Output()
  enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes);
  }

  // Getter keeps template clean by moving conditional logic into the component.
  get cardClasses() {
    return {
      'card-enrolled': this.course.credits >= 4,
      'card-full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get cardStyle() {
    switch (this.course.gradeStatus) {
      case 'passed':
        return { 'border-left': '6px solid green' };

      case 'failed':
        return { 'border-left': '6px solid red' };

      default:
        return { 'border-left': '6px solid gray' };
    }
  }

}