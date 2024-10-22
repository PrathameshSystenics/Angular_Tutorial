import { Component } from '@angular/core';

@Component({
  selector: 'eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {
  username: string = "Prathamesh"

  // Event binded function
  onUsernameChange(event: any) {
    console.log()
    this.username = event.target.value;
  }
}
