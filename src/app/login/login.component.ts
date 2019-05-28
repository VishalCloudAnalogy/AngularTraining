import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  useremail: string;
  userpass: string;
  // name: any;
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    pswd: new FormControl('')
  });
  
  @Output() dataEvent = new EventEmitter<any>();

  // @Output() myForm = new EventEmitter<{username:string, useremail: string, userpass: string}>();

  // onSubmit(username:string, useremail: string, userpass: string) {
    onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.username = this.profileForm.value.name;
    this.useremail = this.profileForm.value.email;
    this.userpass = this.profileForm.value.pswd;
    // console.log("Name " + this.username + " Email " + this.useremail + " Pass " + this.userpass);
    this.dataEvent.emit([this.username, this.useremail, this.userpass])
    // this.myForm.emit({uname: this.username, uemail: this.useremail, upass: this.userpass});
  }

  constructor(private userData:MyserviceService) { }

  ngOnInit() {
  }
  
  public onLogin() {
    this.userData.loginData(this.profileForm.value);
  }
}
