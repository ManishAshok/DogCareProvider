import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'services/adminservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private adminService: AdminserviceService
    ) { 
      
      this.loginForm = this.formBuilder.group({
      });
    }
    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  
  get f() {
    return this.loginForm.controls;
  }
  errorMessage: any;
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("Data : ", this.loginForm.value);
    this.adminService.checkUserLogin(this.loginForm.value).subscribe(
      data => {
        console.log("Response : ", data.response);
        if (data.responseCode == "OK") {
          window.localStorage.setItem("customerid", data.response.customerId);
          this.router.navigate(['/customerhomepage']);
        }
        else if(data.responseCode == "409"){
          Swal.fire({
            icon: 'error',
            text : "Invalid UserName/Password",
            showCloseButton: true});
            this.loginForm.reset();
        }
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }
}
