import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor() { }
  name = new FormControl('');
  email = new FormControl('');
  ngOnInit() {
  }
  updateName() {
    this.name.setValue('Amit');
    this.email.setValue('amit.kumar@cloudanalogy.com');
  }
}
