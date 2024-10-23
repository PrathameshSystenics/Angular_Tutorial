import { Component } from '@angular/core';

export const people = [
  { name: "John", gender: "male" },
  { name: "Emily", gender: "female" },
  { name: "Michael", gender: "male" },
  { name: "Sarah", gender: "female" },
  { name: "David", gender: "male" },
  { name: "Emma", gender: "female" },
  { name: "James", gender: "male" },
  { name: "Olivia", gender: "female" },
  { name: "Robert", gender: "male" },
  { name: "Sophia", gender: "female" },
  { name: "Daniel", gender: "male" },
  { name: "Isabella", gender: "female" },
  { name: "Thomas", gender: "male" },
  { name: "Mia", gender: "female" },
  { name: "Charles", gender: "male" },
  { name: "Ava", gender: "female" },
  { name: "Christopher", gender: "male" },
  { name: "Amelia", gender: "female" },
  { name: "Matthew", gender: "male" },
  { name: "Charlotte", gender: "female" }
];



@Component({
  selector: 'ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.css'
})
export class NgstyleComponent {
  listofPeoples = people
}
