import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit { 
  //userEmail: string;
  //userPassword: string;  

  signUpForm = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
    userName: new FormControl('')
  });

  constructor(private myService: MyServiceService) { }
  ngOnInit() { }

  signUp() { 
    //this.userEmail = this.signUpForm.value.userEmail;
    //this.userPassword = this.signUpForm.value.userPassword;

    //console.log('Email: ',this.signUpForm.value.userEmail);
    //console.log('password: ',this.signUpForm.value.userPassword);

    this.myService.setLoginData(this.signUpForm.value);
    
  }

}
