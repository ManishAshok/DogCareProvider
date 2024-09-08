import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'services/adminservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addnewdog',
  templateUrl: './addnewdog.component.html',
  styleUrls: ['./addnewdog.component.css']
})
export class AddnewdogComponent implements OnInit {
  newDogForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminserviceService,
    private router: Router
  ) {
    this.newDogForm = this.formBuilder.group({
    });
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode==32)) {
      return false;
    }
    return true;
  }
  errorMessage: any;
  dogData:any;
  get f() { return this.newDogForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    if (this.newDogForm.invalid) {
      console.log("Data : ");
      //return;
    }
    console.log("Data : ", this.newDogForm.value);
    this.dogData={
      dogName: this.newDogForm.controls['dogName'].value,
      ownerName: this.newDogForm.controls['ownerName'].value,
      //centerName: this.newDogForm.controls['centerName'].value,
      emailId: this.newDogForm.controls['emailId'].value,
      phoneNum: this.newDogForm.controls['phoneNum'].value,
      dtype: this.newDogForm.controls['dtype'].value,
      qty: this.newDogForm.controls['qty'].value,
      price: this.newDogForm.controls['price'].value,
      customerId:window.localStorage.getItem("customerid")
    };
    console.log("Dog Data : ", this.dogData);
    this.adminService.insertNewDog(this.dogData).subscribe(
      data => {
        console.log("Response : ", data.response);
        console.log("Response Code : ", data.responseCode);
        if (data.responseCode == "OK") {
          console.log("Dog Data Inserted");
          Swal.fire({
            icon: 'success',
            text: "Dog Data Saved Success",
            showCloseButton: true
          });
          this.newDogForm.reset();
        }
        else if (data.responseCode == "INTERNAL_SERVER_ERROR") {
          console.log("Data Not Inserted");
          Swal.fire({
            icon: 'error',
            title: 'Dog Data Not Saved',
            text: 'Something is wrong in the data!'
          });
          this.newDogForm.reset();
        }
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }

  ngOnInit(): void {
    this.newDogForm = this.formBuilder.group({
      dogName: ['', Validators.required],
      ownerName: ['', Validators.required],
      //centerName: ['', Validators.required],
      emailId: ['', Validators.required],
      phoneNum: ['', Validators.required],
      dtype: ['', Validators.required],
      qty: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
}
