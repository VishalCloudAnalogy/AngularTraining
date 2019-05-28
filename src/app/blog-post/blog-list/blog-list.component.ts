import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  newBlogData: any;
  formDataHolder: any;

  constructor(private myService: MyServiceService) { } 

  ngOnInit() {
    this.newBlogData = this.myService.holdNewBlog();
    
    this.formDataHolder = this.myService.holdFormData();
  }

}
