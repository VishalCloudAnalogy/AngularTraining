import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  tempData: any;
  servsubject = new Subject<any>();

  constructor(private router: Router) { }
  displayDate() {
    let ndate = new Date();
    return ndate;
 }

 public loginData(data: any) {
  console.log("Data Received ", data);
  this.tempData = data;
  this.router.navigate(['services']);
  //console.log("Data Received " + this.tempData);
//    console.log("New Changes"); 
}


 public sendData() {
  return this.tempData;
 }
}
