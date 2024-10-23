import { Component } from '@angular/core';
import { people, PeopleType } from '../../data/people';


@Component({
  selector: 'ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.css'
})
export class NgstyleComponent {
  listofPeoples: PeopleType[] = people
}
