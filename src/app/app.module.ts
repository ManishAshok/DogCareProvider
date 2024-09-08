import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonlinksComponent } from './commonlinks/commonlinks.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NewuserComponent } from './newuser/newuser.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NewdogcareComponent } from './newdogcare/newdogcare.component';
import { AdminviewdogcareComponent } from './adminviewdogcare/adminviewdogcare.component';
import { AdminviewcustomersComponent } from './adminviewcustomers/adminviewcustomers.component';
import { AdminviewselectedComponent } from './adminviewselected/adminviewselected.component';
import { CustomerviewselectedComponent } from './customerviewselected/customerviewselected.component';
import { CustomerselectcareComponent } from './customerselectcare/customerselectcare.component';
import { AdminlinksComponent } from './adminlinks/adminlinks.component';
import { UserlinksComponent } from './userlinks/userlinks.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerviewdogComponent } from './customerviewdog/customerviewdog.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { PiechartComponent } from './piechart/piechart.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { AddnewdogComponent } from './addnewdog/addnewdog.component';
import { UserviewdogsComponent } from './userviewdogs/userviewdogs.component';
import { UserviewcarecentersComponent } from './userviewcarecenters/userviewcarecenters.component';
import { UserselectcarecenterComponent } from './userselectcarecenter/userselectcarecenter.component';
import { UserviewselectedComponent } from './userviewselected/userviewselected.component';
import { CustomerviewcentersComponent } from './customerviewcenters/customerviewcenters.component';
import { CustomerselectedcareComponent } from './customerselectedcare/customerselectedcare.component';
import { CustomerselecteddogCareComponent } from './customerselecteddog-care/customerselecteddog-care.component';
import { PaymentsuccesspageComponent } from './paymentsuccesspage/paymentsuccesspage.component';
import { AdminviewtransactionsComponent } from './adminviewtransactions/adminviewtransactions.component';
import { AdminviewfullreportComponent } from './adminviewfullreport/adminviewfullreport.component';
import { CustomerviewfullreportComponent } from './customerviewfullreport/customerviewfullreport.component';
import { CustomerviewtransactionsComponent } from './customerviewtransactions/customerviewtransactions.component';
import { CareviewtransactionsComponent } from './careviewtransactions/careviewtransactions.component';
import { CareviewfullreportComponent } from './careviewfullreport/careviewfullreport.component';
import { CenteraddplanComponent } from './centeraddplan/centeraddplan.component';
import { CenterloginComponent } from './centerlogin/centerlogin.component';
import { CenterviewcustomersComponent } from './centerviewcustomers/centerviewcustomers.component';
import { CenterviewplansComponent } from './centerviewplans/centerviewplans.component';
import { CenterlinksComponent } from './centerlinks/centerlinks.component';
import { CenterhomeComponent } from './centerhome/centerhome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CommonlinksComponent,
    UserloginComponent,
    AdminloginComponent,
    NewuserComponent,
    AboutpageComponent,
    ContactpageComponent,
    AdminhomeComponent,
    NewdogcareComponent,
    AdminviewdogcareComponent,
    AdminviewcustomersComponent,
    AdminviewselectedComponent,
    CustomerviewselectedComponent,
    CustomerselectcareComponent,
    AdminlinksComponent,
    UserlinksComponent,
    CustomerviewdogComponent,
    PiechartComponent,
    CustomerhomeComponent,
    AddnewdogComponent,
    UserviewdogsComponent,
    UserviewcarecentersComponent,
    UserselectcarecenterComponent,
    UserviewselectedComponent,
    CustomerviewcentersComponent,
    CustomerselectedcareComponent,
    CustomerselecteddogCareComponent,
    PaymentsuccesspageComponent,
    AdminviewtransactionsComponent,
    AdminviewfullreportComponent,
    CustomerviewfullreportComponent,
    CustomerviewtransactionsComponent,
    CareviewtransactionsComponent,
    CareviewfullreportComponent,
    CenteraddplanComponent,
    CenterloginComponent,
    CenterviewcustomersComponent,
    CenterviewplansComponent,
    CenterlinksComponent,
    CenterhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, MatSortModule,MatTableModule,MatPaginatorModule, 
    BrowserAnimationsModule,NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
