import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyEmployee } from 'src/model/myEmployee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string='http://localhost:4000/employees'

  getAllEmp():Observable<MyEmployee>{
    return this.http.get(this.baseUrl);
  }
  viewEmployee(Id:any){                           //passed parameter contact id
    //http://localhost:4200/employee/view/2               to get this link we use below syntax 
    return this.http.get(`${this.baseUrl}/${Id}`)
  }

  addEmployee(empBody:any){
    return this.http.post(this.baseUrl,empBody)
  }

  deleteEmployee(empId:any){
    return this.http.delete(`${this.baseUrl}/${empId}`)
  }

  updateEmployee(empId:any,empBody:any){
    return this.http.put(`${this.baseUrl}/${empId}`,empBody)
  }
}
