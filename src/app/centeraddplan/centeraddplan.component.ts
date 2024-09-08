import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'services/adminservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-centeraddplan',
  templateUrl: './centeraddplan.component.html',
  styleUrls: ['./centeraddplan.component.css']
})
export class CenteraddplanComponent implements OnInit {  
  centerId: any;  
  newPlanForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminserviceService,
    private router: Router
  ) {
    this.newPlanForm = this.formBuilder.group({
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
  planData:any;
  get f() { return this.newPlanForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    if (this.newPlanForm.invalid) {
      console.log("Data : ");
      //return;
    }
    console.log("Data : ", this.newPlanForm.value);
    this.planData={
      planName: this.newPlanForm.controls['planName'].value,
      dogType: this.newPlanForm.controls['dtype'].value,
      price: this.newPlanForm.controls['price'].value,
      comments: this.newPlanForm.controls['comments'].value,
      centerId:window.localStorage.getItem("centerid")
    };
    console.log("Dog Data : ", this.planData);
    this.adminService.insertNewPlan(this.planData).subscribe(
      data => {
        console.log("Response : ", data.response);
        console.log("Response Code : ", data.responseCode);
        if (data.responseCode == "OK") {
          console.log("Dog Plan Data Inserted");
          Swal.fire({
            icon: 'success',
            text: "Dog Plan Data Saved Success",
            showCloseButton: true
          });
          this.newPlanForm.reset();
        }
        else if (data.responseCode == "INTERNAL_SERVER_ERROR") {
          console.log("Data Not Inserted");
          Swal.fire({
            icon: 'error',
            title: 'Dog Plan Data Not Saved',
            text: 'Something is wrong in the data!'
          });
          this.newPlanForm.reset();
        }
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }

  ngOnInit(): void {
    this.centerId = window.localStorage.getItem("centerid");
    console.log("CenterId : ", this.centerId);
    this.newPlanForm = this.formBuilder.group({
      planName: ['', Validators.required],
      dtype: ['', Validators.required],      
      price: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }
}
