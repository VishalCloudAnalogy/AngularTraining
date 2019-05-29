import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
