import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Customer Id : ", window.localStorage.getItem("customerid"));
  }

}
