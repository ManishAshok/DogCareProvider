import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminserviceService } from 'services/adminservice.service';
import * as echarts from 'echarts';
export interface DisplayData {
  Slno: string;
  CenterName: string;
  EmailId: string;
  Address: string;
  PhoneNum: string;
  OwnerName: string;
  Actions:string;
}
@Component({
  selector: 'app-customerviewcenters',
  templateUrl: './customerviewcenters.component.html',
  styleUrls: ['./customerviewcenters.component.css']
})
export class CustomerviewcentersComponent implements OnInit {
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
  ['Slno', 'CenterName', 'EmailId', 'Address', 'PhoneNum','OwnerName','Actions'];
  customerId:any;
  listCustomersDogs()
  {   
    this.customerId=window.localStorage.getItem("customerid");
    this.adminService.getAllCenterData().subscribe(
      data => {
        if (data.responseCode == "OK") {
          console.log("Data Found : ", data.response);
          this.dogdata = data.response;                   
          //console.log("Data Found : ", this.dogdata);
          const displayData: DisplayData[] = [];
          for (var i = 0; i < this.dogdata.length; i++) {
            displayData.push({
              "CenterName": this.dogdata[i].centerName,
              "EmailId": this.dogdata[i].emailId,
              "Address": this.dogdata[i].address,
              "PhoneNum":this.dogdata[i].phoneNum,
              "OwnerName":this.dogdata[i].ownerName,
              "Slno":(i+1).toString(),
              "Actions":this.dogdata[i].centerId,
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
