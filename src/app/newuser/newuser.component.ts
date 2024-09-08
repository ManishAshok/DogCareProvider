import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'services/adminservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  newUserForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private adminService: AdminserviceService,
    private router: Router
  ) {
    this.newUserForm = this.formBuilder.group({
    });
  }
  errorMessage: any;
  get f() { return this.newUserForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.newUserForm.invalid) {
      return;
    }
    console.log("Data : ", this.newUserForm.value);
    this.adminService.insertNewUser(this.newUserForm.value).subscribe(
      data => {
        console.log("Response : ", data.response);
        console.log("Response Code : ", data.responseCode);
        if (data.responseCode == "OK") {
          console.log("New Data Inserted");
          Swal.fire({
            icon: 'success',
            text : "Customer Data Saved Success",
            showCloseButton: true});
            this.newUserForm.reset();
        }
        else if(data.responseCode == "409"){
          console.log("Data Not Found");

          Swal.fire({
            icon: 'error',
            title: 'No Data Saved',
            text: 'Something is wrong in the data!'
          });


            this.newUserForm.reset();
        }
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', Validators.required],
      phoneNum: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
}
