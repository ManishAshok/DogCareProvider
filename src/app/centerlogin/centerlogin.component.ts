import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'services/adminservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-centerlogin',
  templateUrl: './centerlogin.component.html',
  styleUrls: ['./centerlogin.component.css']
})
export class CenterloginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private adminService: AdminserviceService
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
    this.adminService.checkCenterLogin(this.loginForm.value).subscribe(
      data => {
        console.log("Response : ", data.response);
        if (data.responseCode == "OK") {
          window.localStorage.setItem("centerid", data.response.centerId);
          this.router.navigate(['/centerhome']);
        }
        else if (data.responseCode == "409") {
          Swal.fire({
            icon: 'error',
            text: "Invalid UserName/Password",
            showCloseButton: true
          });
          this.loginForm.reset();
        }
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }
}
