import { Component, Input } from '@angular/core';
import { Laptop } from '../../../data/laptop';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input("laptop")
  laptopdetails: Laptop = {} as any;
}
