import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-childcontent',
  templateUrl: './childcontent.component.html',
})
export class ChildcontentComponent implements AfterContentInit {

  @ContentChild("divcontainer")
  Container: ElementRef = undefined as any;


  ngOnInit() {
    console.log("ng")
    console.log("ContentChild => ", this.Container?.nativeElement)
  }

  // ngAfterContentInit Hook after the projected content has been initialized.
  ngAfterContentInit(): void {
    console.log("Content has been projected.")
    console.log("ContentChild in aftercontentinit => ", this.Container.nativeElement);

  }

}
