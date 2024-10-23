import { Component } from '@angular/core';

@Component({
  selector: 'ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  searchText: string = ""
  names: string[] = ["John", "Celvin", "Kelvin", "RutherFord", "aryan", "Prathamesh", "Jadhav"]

  toDisplay(): boolean {
    
    return this.searchText !== ""
  }
}
