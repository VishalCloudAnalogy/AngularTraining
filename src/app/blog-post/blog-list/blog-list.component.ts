import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  newBlogHolder: any;
  bTitle: string;
  blogDesc: string;  

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    this.newBlogHolder = this.myService.holdNewBlog();
    this.bTitle = this.newBlogHolder.blogTitle;
    this.blogDesc = this.newBlogHolder.blogDesc;
    console.log(this.bTitle);
    console.log(this.blogDesc);
  }
}
