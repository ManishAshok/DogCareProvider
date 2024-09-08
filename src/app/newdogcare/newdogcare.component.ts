import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'services/adminservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newdogcare',
  templateUrl: './newdogcare.component.html',
  styleUrls: ['./newdogcare.component.css']
})
export class NewdogcareComponent implements OnInit {
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
  errorMessage: any;
  get f() { return this.newDogForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.newDogForm.invalid) {
      return;
    }
    console.log("Data : ", this.newDogForm.value);
    this.adminService.insertNewCenter(this.newDogForm.value).subscribe(
      data => {
        console.log("Response : ", data.response);
        console.log("Response Code : ", data.responseCode);
        if (data.responseCode == "OK") {
          console.log("New Data Inserted");
          Swal.fire({
            icon: 'success',
            text: "Center Data Saved Success",
            showCloseButton: true
          });
          this.newDogForm.reset();
        }
        else if (data.responseCode == "409") {
          console.log("Data Not Found");
          Swal.fire({
            icon: 'error',
            title: 'No Data Saved',
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
      userName: ['', Validators.required],
      password: ['', Validators.required],
      centerName: ['', Validators.required],
      ownerName: ['', Validators.required],
      emailId: ['', Validators.required],
      phoneNum: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
}
