import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
       FormsModule      
  ]
})

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // this.ngOnInit.serverElements.push({
    //   type:'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }

  onAddBlueprint() {
    // this.ngOnInit.serverElements.push({
    //   type:'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }
}
