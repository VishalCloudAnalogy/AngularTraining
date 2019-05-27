import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  loginInputSubject = new Subject<any>();
  holdFormValue: any;
  holdBlogValue: any;

  constructor(private router: Router) { }


  public setLoginData(data: any) {
    console.log("Details in service", data);
    this.holdFormValue = data;
    this.router.navigate(['profile']);
  }

  holdFormData() {
    return this.holdFormValue;
  }

  // For new blog 

  newBlogData(blog: any) {
    this.holdBlogValue = blog;
    console.log("in the service file ",this.holdBlogValue);
  }

  // Return the blog value to show the Blog on the all blpog page
  holdNewBlog () {
    return this.holdBlogValue;
  }
}
