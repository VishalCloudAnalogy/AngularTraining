import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name ="";
  public myName = "";
  public yourName = "";
  public message = "Welcome";
  // public successClass = "msg-success";
  public hasError = true;
  public isColor = true;
  public messageClasses = {
    "msg-success": !this.hasError,
    "msg-failed": this.hasError,
    "msg-bgcolor": this.isColor
  }
  public isSpecial = {
    backgroundColor: "sky-blue",
    color: "orange",
    fontStyle: "italic"
  }


  public formVal(value) {
    console.log( value);

  }

  colorname: string;
  colorValue(val) {
      //  return this.enteredColor;
       console.log(val);
      //  return this.colorname;
      //  console.log(this.colorname);
     }
  // public color = this.val;

  public subjects = ["English", "Hindi", "Maths", "Computer"];

  constructor() { }

  ngOnInit() {
  }

}