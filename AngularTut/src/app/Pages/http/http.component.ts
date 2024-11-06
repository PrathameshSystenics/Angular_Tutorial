import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { delay, map, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  // inject the instance of the HttpClient in component
  http: HttpClient = inject(HttpClient);
  posts: any[] = []


  ngOnInit(): void {
    // calling the get request method in these
    this.http
      .get(
        'https://dummyjson.com/posts'
      )
      .pipe(
        map((value) => {
          return value['posts']
        }),
        take(10),
        delay(10*1000)).subscribe({
          next: (val) => {
            this.posts = val
          }
        });
  }
}
