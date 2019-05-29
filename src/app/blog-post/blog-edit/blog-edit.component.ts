import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  newBlogData: any;
  formDataHolder: any;
  editBlog: any;

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    this.newBlogData = this.myService.holdNewBlog();

    this.formDataHolder = this.myService.holdFormData();
  }

  updateBlog() {
    console.log("Working", this.editBlog.value);
  }

}
