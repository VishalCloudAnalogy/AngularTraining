import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {
  newBlogData: any;
  formDataHolder: any;
  dltForm: any;

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    this.newBlogData = this.myService.holdNewBlog();

    this.formDataHolder = this.myService.holdFormData();
  }
  
  deleteBlog() {
    console.log(this.dltForm.value);
  }

}
