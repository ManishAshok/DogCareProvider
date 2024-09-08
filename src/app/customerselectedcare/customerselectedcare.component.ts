import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminserviceService } from 'services/adminservice.service';
import * as echarts from 'echarts';

export interface DisplayData {
  Slno: string;
  DogName: string;
  DogType: string;
  Quantity: string;
  Price: string;
  Actions:string;
}
@Component({
  selector: 'app-customerselectedcare',
  templateUrl: './customerselectedcare.component.html',
  styleUrls: ['./customerselectedcare.component.css']
})
export class CustomerselectedcareComponent implements OnInit {

  constructor(private adminService: AdminserviceService,private router:Router) { }

  centerId:any;
  ngOnInit(): void {
    this.centerId=window.localStorage.getItem("centerid");
    console.log("Center Id : ", this.centerId);
    this.getCenterData();
    this.listCustomersDogs();
  }
  centerdata:any;
  errorMessage: any;
  getCenterData()
  {   
    this.centerId=window.localStorage.getItem("centerid");
    this.adminService.getCenterDataById(this.centerId).subscribe(
      data => {
        if (data.responseCode == "OK") {
          console.log("Data Found : ", data.response);
          this.centerdata = data.response;                   
          }
        else if(data.responseCode == "INTERNAL_SERVER_ERROR"){
          console.log("Data Not Found : INTERNAL_SERVER_ERROR");
        }
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }

  OnClick(value:any)
  {
    console.log(value);
    //window.localStorage.setItem("studentid", value);
    //this.router.navigate(['/viewstudent']);
  }

  dogdata:any=[];
  dataSource!: MatTableDataSource<DisplayData>;
  displayedColumns: string[] =
  ['Slno', 'DogName', 'DogType', 'Quantity', 'Price','Actions'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  @ViewChild('paginator') paginator!: MatPaginator;
  sort: any;

  customerId:any;
  listCustomersDogs()
  {   
    this.customerId=window.localStorage.getItem("customerid");
    this.adminService.getAllDogData(this.customerId).subscribe(
      data => {
        if (data.responseCode == "OK") {
          console.log("Data Found : ", data.response);
          this.dogdata = data.response;                   
          //console.log("Data Found : ", this.dogdata);
          const displayData: DisplayData[] = [];
          for (var i = 0; i < this.dogdata.length; i++) {
            displayData.push({
              "DogName": this.dogdata[i].dogName,
              "DogType": this.dogdata[i].dtype,
              "Quantity": this.dogdata[i].qty,
              "Price":this.dogdata[i].price,
              "Slno":(i+1).toString(),
              "Actions":this.dogdata[i].dogId,
            });
          }        
          this.dataSource = new MatTableDataSource(displayData);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator; 
          console.log("Display Data : ", displayData);
        }
        else if(data.responseCode == "INTERNAL_SERVER_ERROR"){
          console.log("Data Not Found : INTERNAL_SERVER_ERROR");
        }
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }
}
