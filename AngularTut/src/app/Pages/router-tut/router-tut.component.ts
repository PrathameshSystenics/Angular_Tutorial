import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'router-tut',
  templateUrl: './router-tut.component.html',
})
export class RouterTutComponent {
  public constructor(
    public activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  onBtnNavigate() {
    // When clicked navigating to the specified url using navigate method.
    this.route.navigate(['binding']);
  }

  onBtnNavigateByUrl() {
    // when clicked navigate to the specified url using navigate by url method.
    this.route.navigateByUrl('/directive');
  }
}
