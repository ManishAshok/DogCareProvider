import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const server_api = "http://localhost:8080/";
const customer_address = "api/customer/";
const customer_login = "api/login";
const center_login = "api/centerlogin";
const dog_address = "api/dog";
const center_address = "api/center";
const plan_address = "api/plan";

const http = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  insertNewPlan(data: any): Observable<any> {
    return this.http.post(server_api + plan_address,data,http);
  }
  checkCenterLogin(data: any) : Observable<any> {
    return this.http.post(
      `${server_api}${center_login}`,data,http);
  }
  getCenterDataById(centerId: any) : Observable<any> {
    return this.http.get(
      `${server_api}${center_address}/${centerId}`,
      http
    );
  }
  getAllDogData(customerId: any): Observable<any> {
    return this.http.get(
      `${server_api}${dog_address}/${customerId}`,
      http
    );
  }
  constructor(private http: HttpClient) { }
  getAllCustomerData(): Observable<any> {
    return this.http.get(
      `${server_api}${customer_address}`,
      http
    );
  }
  checkUserLogin(data:any): Observable<any> {
    return this.http.post(
      `${server_api}${customer_login}`,data,http);
  }
  getAllCenterData(): Observable<any> {
    return this.http.get(
      `${server_api}${center_address}`,
      http
    );
  }
  insertNewUser(data:any): Observable<any> {
    return this.http.post(server_api + customer_address,data,http);
  }
  insertNewDog(data:any): Observable<any> {
    return this.http.post(server_api + dog_address,data,http);
  }
  insertNewCenter(data:any): Observable<any> {
    return this.http.post(server_api + center_address,data,http);
  }
}
