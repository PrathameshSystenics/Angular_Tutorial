import { Component } from '@angular/core';

@Component({
  selector: 'ngclass',
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  searchText: string = ""

  toDisplay(): boolean {
    this.searchText = this.searchText.trim()
    return this.searchText !== ""
  }

  showAlert(message: string) {
    alert(message + "<= You searched these")
  }

}
