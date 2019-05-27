import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  formDataHolder: any;
  userName: any;

  postBlog = new FormGroup({   
    blogTitle: new FormControl(''),
    blogDesc: new FormControl('')    
  });  

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    this.formDataHolder = this.myService.holdFormData();
    this.userName = this.formDataHolder.userName;          
  }

  newBlog() {    
    this.myService.newBlogData(this.postBlog.value);
  }

}
