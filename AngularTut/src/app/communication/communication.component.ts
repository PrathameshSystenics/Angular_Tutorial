import { Component } from '@angular/core';
import { students, Student } from '../../data/student';

@Component({
  selector: 'communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  // communication between the parent component with the child component
  listofStudents: Student[] = students;
}
