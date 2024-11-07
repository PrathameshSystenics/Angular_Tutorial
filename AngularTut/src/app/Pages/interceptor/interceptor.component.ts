import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { delay, map, take } from 'rxjs';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
})
export class InterceptorComponent {
  http: HttpClient = inject(HttpClient);
  posts: any[] = [];
  isloading: boolean = true;
  errorMessage: any = null;
  respmsg: string = '';

  ngOnInit(): void {
    this.isloading = true;
    // calling the get request method in these

    // passing the query params to it
    let QueryParams = new HttpParams().set('limit', 10).set('skip', 10);

    this.http
      .get('https://dummyjson.com/posts', { params: QueryParams })
      .pipe(
        map((value) => {
          return value['posts'];
        }),
        take(10),
        delay(10 * 1000)
      )
      .subscribe({
        next: (val) => {
          this.isloading = false;
          this.posts = val;
        },
        error: (err) => {
          this.isloading = false;
        },
      });
  }
}
