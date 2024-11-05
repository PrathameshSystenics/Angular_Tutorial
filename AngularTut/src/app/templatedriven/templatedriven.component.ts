import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'templatedriven',
  templateUrl: './templatedriven.component.html',
})
export class TemplatedrivenComponent {
  // get the reference of the register form
  @ViewChild('registerform')
  form: NgForm = null as any;

  // these the submit button callback
  onSubmit() {
    console.log(this.form);
  }
}
