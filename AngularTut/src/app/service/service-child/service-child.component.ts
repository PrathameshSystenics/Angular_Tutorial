import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
})
export class ServiceChildComponent {
  public usernname: string = '';

  // getting the parent services in these
  public constructor(private service: SubscribeService) {}

  ngDoCheck(): void {
    // accessing the value stored in the service
    this.usernname = this.service.loginusername;
  }
}
