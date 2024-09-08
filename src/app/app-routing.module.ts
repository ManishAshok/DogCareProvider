import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component';
import { AboutpageComponent} from './aboutpage/aboutpage.component';
import { UserloginComponent} from './userlogin/userlogin.component';
import { AdminloginComponent} from './adminlogin/adminlogin.component';
import { ContactpageComponent} from './contactpage/contactpage.component';
import { NewuserComponent } from './newuser/newuser.component';
import { NewdogcareComponent } from './newdogcare/newdogcare.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminlinksComponent } from './adminlinks/adminlinks.component';
import { AdminviewcustomersComponent } from './adminviewcustomers/adminviewcustomers.component';
import { AdminviewdogcareComponent } from './adminviewdogcare/adminviewdogcare.component';
import { AdminviewselectedComponent } from './adminviewselected/adminviewselected.component';
import { CustomerselectcareComponent } from './customerselectcare/customerselectcare.component';
import { CustomerviewselectedComponent } from './customerviewselected/customerviewselected.component';
import { CustomerviewdogComponent } from './customerviewdog/customerviewdog.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { AddnewdogComponent } from './addnewdog/addnewdog.component';
import { CustomerviewcentersComponent } from './customerviewcenters/customerviewcenters.component';
import { CustomerselectedcareComponent } from './customerselectedcare/customerselectedcare.component';
import { CustomerviewtransactionsComponent } from './customerviewtransactions/customerviewtransactions.component';
import { CustomerviewfullreportComponent } from './customerviewfullreport/customerviewfullreport.component';
import { CareviewtransactionsComponent } from './careviewtransactions/careviewtransactions.component';
import { CareviewfullreportComponent } from './careviewfullreport/careviewfullreport.component';
import { AdminviewtransactionsComponent } from './adminviewtransactions/adminviewtransactions.component';
import { AdminviewfullreportComponent } from './adminviewfullreport/adminviewfullreport.component';
import { CenterhomeComponent } from './centerhome/centerhome.component';
import { CenteraddplanComponent } from './centeraddplan/centeraddplan.component';
import { CenterviewplansComponent } from './centerviewplans/centerviewplans.component';
import { CenterviewcustomersComponent } from './centerviewcustomers/centerviewcustomers.component';
import { CenterloginComponent } from './centerlogin/centerlogin.component';

const routes: Routes = [
  { path: '', redirectTo:'/aboutpage', pathMatch:'full' },
  { path: 'homepage', component:HomepageComponent },
  { path: 'userlogin', component:UserloginComponent },
  { path: 'centerlogin', component:CenterloginComponent },
  { path: 'adminlogin', component:AdminloginComponent },
  { path: 'aboutpage', component:AboutpageComponent },
  { path: 'contactpage', component:ContactpageComponent },
  { path: 'newuser', component:NewuserComponent },
  { path: 'adminhomepage', component:AdminhomeComponent },
  { path: 'newdogcare', component:NewdogcareComponent },
  { path: 'adminviewdogcare', component:AdminviewdogcareComponent },
  { path: 'adminviewcustomer', component:AdminviewcustomersComponent },
  { path: 'customerselectcare', component:CustomerselectcareComponent },
  { path: 'customerviewselected', component:CustomerviewselectedComponent },
  { path: 'customerviewdog', component:CustomerviewdogComponent },
  { path: 'adminviewselected', component:AdminviewselectedComponent },
  { path: 'adminviewtransactions', component:AdminviewtransactionsComponent },
  { path: 'adminviewfullreport', component:AdminviewfullreportComponent },

  { path: 'customerhomepage', component:CustomerhomeComponent },
  { path: 'customernewdog', component:AddnewdogComponent },
  { path: 'customerviewcenter', component:CustomerviewcentersComponent },
  { path: 'customerselectcenter', component:CustomerselectcareComponent },
  { path: 'customerselectedcenter', component:CustomerselectedcareComponent },
  { path: 'customerselectdogcarecenter', component:CustomerselectedcareComponent },
  { path: 'customerviewtransactions', component:CustomerviewtransactionsComponent },
  { path: 'customerviewfullreport', component:CustomerviewfullreportComponent },

  { path: 'centerhome', component:CenterhomeComponent },
  { path: 'centeraddplan', component:CenteraddplanComponent },
  { path: 'centerviewplans', component:CenterviewplansComponent },
  { path: 'centerviewcustomers', component:CenterviewcustomersComponent },
  { path: 'centerviewtransactions', component:CareviewtransactionsComponent },
  { path: 'centerviewfullreport', component:CareviewfullreportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
