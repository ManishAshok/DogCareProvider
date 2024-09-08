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
  selector: 'app-customerviewdog',
  templateUrl: './customerviewdog.component.html',
  styleUrls: ['./customerviewdog.component.css']
})
export class CustomerviewdogComponent implements OnInit {
  errorMessage: any;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  @ViewChild('paginator') paginator!: MatPaginator;
  sort: any;
  constructor(private adminService: AdminserviceService,private router:Router) { }
  ngOnInit(): void {
    this.listCustomersDogs();
  }
  OnClick(value:any)
  {
    console.log(value);
    window.localStorage.setItem("studentid", value);
    this.router.navigate(['/viewstudent']);
  }
  dogdata:any=[];
  dataSource!: MatTableDataSource<DisplayData>;
  displayedColumns: string[] =
  ['Slno', 'DogName', 'DogType', 'Quantity', 'Price','Actions'];

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
