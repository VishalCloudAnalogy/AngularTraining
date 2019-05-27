import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formDataHolder: any;
  userName: string;
  mail: string;

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    //console.log("Hihihihih", this.myService.holdFormData());

    this.formDataHolder = this.myService.holdFormData();

    this.userName = this.formDataHolder.userName;
    this.mail = this.formDataHolder.userEmail;       
  }

}
