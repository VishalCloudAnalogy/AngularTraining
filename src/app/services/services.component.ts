import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  holdData(holdData: any) {
    throw new Error("Method not implemented.");
  }
  data: any;
  useremail: string;
  username: string;
  userpass: string;

  // receiveData($event) {
  //   this.data = $event;
  //   console.log("Name " + this.username + " Email " + this.useremail + " Pass " + this.userpass);
  // }

  
  constructor() {}

  ngOnInit() {
  }

}
