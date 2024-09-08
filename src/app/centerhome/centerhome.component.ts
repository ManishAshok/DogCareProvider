import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centerhome',
  templateUrl: './centerhome.component.html',
  styleUrls: ['./centerhome.component.css']
})
export class CenterhomeComponent implements OnInit {

  constructor() { }
  centerId: any;
  ngOnInit(): void {
    this.centerId = window.localStorage.getItem("centerid");
    console.log("CenterId : ", this.centerId);
  }

}
