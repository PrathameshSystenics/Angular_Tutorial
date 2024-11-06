import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  http: HttpClient = inject(HttpClient);
  apikey: string = 'XVLoTe7tR9Gl6GvpH1yegqNHgn8y7oHS7v5v1WPrsH';

  ngOnInit(): void {
    this.http
      .get(
        'https://api.jsonsilo.com/public/28cfd1bc-ce83-4daa-8c79-b947d8d6002a'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
