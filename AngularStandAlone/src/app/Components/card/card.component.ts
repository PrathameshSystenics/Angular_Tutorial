import { Component, Input } from '@angular/core';
import { Services } from '../../Interfaces/Services';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {

  @Input()
  service: Services = null as any;
}
