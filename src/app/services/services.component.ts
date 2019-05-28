import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  [x: string]: any;
  holdedata: any;

  constructor(private myservice: MyserviceService) {  }

  ngOnInit() {
    // console.log(this.userData.sendData(temp: any));
    this.edata = this.myservice.sendData();
  }


  // servicelist =[];
  data: any;
  useremail: string;
  username: string;
  userpass: string;
  edata: any;
  name: string;
  
  serviceForm = new FormGroup({
    stitle: new FormControl(''),
    sdescription: new FormControl('')
  });

  onSubmit() {
    console.log(this.serviceForm.value);
    this.servtitle = this.serviceForm.value.stitle;
    this.servdesc = this.serviceForm.value.sdescription;
    // console.log("Title "+ this.servtitle + " & Desc " + this.servdesc);
    // this.servicelist.push(this.serviceForm.value);
    this.myservice.servsubject.next(this.serviceForm.value);
  }
  // receiveData($event) {
  //   this.data = $event;
  //   console.log("Name " + this.username + " Email " + this.useremail + " Pass " + this.userpass);
  // }

  // holdData(holdData: any) {
  //   throw new Error("Method not implemented.");
  // }

}
