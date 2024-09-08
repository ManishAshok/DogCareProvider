import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminserviceService } from 'services/adminservice.service';
export interface DisplayData {
  Slno: string;
  FirstName: string;
  LastName: string;
  MobileNumber: string;
  EmailId: string;
  Address: string;
  Actions:string;
}

@Component({
  selector: 'app-centerviewcustomers',
  templateUrl: './centerviewcustomers.component.html',
  styleUrls: ['./centerviewcustomers.component.css']
})
export class CenterviewcustomersComponent implements OnInit {
  errorMessage: any;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  @ViewChild('paginator') paginator!: MatPaginator;
  sort: any;
  constructor(private adminService: AdminserviceService,private router:Router) { }
  ngOnInit(): void {
    this.listCustomers();
  }
  OnClick(value:any)
  {
    console.log(value);
    window.localStorage.setItem("studentid", value);
    this.router.navigate(['/viewstudent']);
  }
  customerdata:any=[];
  dataSource!: MatTableDataSource<DisplayData>;
  displayedColumns: string[] =
  ['Slno', 'FirstName', 'LastName', 'MobileNumber', 'EmailId','Address','Actions'];

  listCustomers()
  {   
    this.adminService.getAllCustomerData().subscribe(
      data => {
        if (data.responseCode == "OK") {
          this.customerdata = data.response;                   
          console.log("Data Found");
          const displayData: DisplayData[] = [];
          for (var i = 0; i < this.customerdata.length; i++) {
            displayData.push({
              "FirstName": this.customerdata[i].firstName,
              "LastName": this.customerdata[i].lastName,
              "MobileNumber": this.customerdata[i].phoneNum,
              "EmailId":this.customerdata[i].emailId,
              "Address":this.customerdata[i].address,
              "Slno":(i+1).toString(),
              "Actions":this.customerdata[i].customerId,
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
