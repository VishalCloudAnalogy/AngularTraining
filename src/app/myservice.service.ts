import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  holdData: any;

  constructor(private router: Router) { }
  displayDate() {
    let ndate = new Date();
    return ndate;
 }

 loginData(data: any) {
  console.log("Data Received " + data);
  this.holdData = data;
  // this.router.navigate(['services']);
  console.log("Data Received " + this.holdData);
 }

 sendData() {
  return this.holdData;
 }
}
