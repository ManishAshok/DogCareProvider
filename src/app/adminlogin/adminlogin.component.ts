import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
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


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.f.username.value == "admin" && this.f.password.value == "admin") {
      this.router.navigate(['/adminhomepage']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid',
        text: 'Invalid UserName/Password'
      });
    }
  }
}
