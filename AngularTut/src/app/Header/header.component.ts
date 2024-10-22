import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',// Specifying the template or view
  styleUrl: './header.component.css', // specifying the css url to apply to only the html template or view.
  styles: [`li{font-size:23px;}`] ,// list of css 
})
export class HeaderComponent {

}
