import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.css']
})
export class ServicedetailComponent implements OnInit {

  servarr = [];
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.myservice.servsubject.subscribe(data=>{
      console.log("Data is there " + data);
      this.servarr.push(data);
    })
  }

}
