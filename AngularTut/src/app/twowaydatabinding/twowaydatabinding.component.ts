import { Component } from '@angular/core';

@Component({
  selector: 'twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrl: './twowaydatabinding.component.css'
})
export class TwowaydatabindingComponent {
  searchText: string = "Mens Clothes"

  updateSearchText(event: any) {
    console.log(event)
  }
}
