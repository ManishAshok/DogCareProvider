import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'services/adminservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private adminService: AdminserviceService,private router:Router) { }
  errorMessage: any;
  ngOnInit(): void {
    this.listCustomers();
  }
  customerdata:any=[];
  listCustomers()
  {   
    this.adminService.getAllCustomerData().subscribe(
      data => {
        console.log("Response : ", data.response);
        console.log("Response Code : ", data.responseCode);
        if (data.responseCode == "200") {
          this.customerdata = data.response;                   
          console.log("Data Found");          
          console.log("Display Data : ", this.customerdata);
        }
        else if(data.responseCode == "409"){
          console.log("Data Not Found");
        }
      },
      (      err: { error: any; }) => {
        this.errorMessage = err.error;
      }
    );
  }
}
