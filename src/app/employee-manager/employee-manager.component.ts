import { Component, OnInit } from '@angular/core';
import { MyEmployee } from 'src/model/myEmployee';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit{
  loginDate:any;


  dev:string='developer'
  des:string='designer'
  alldev:[]=[]
  result:any;

  allEmployees:MyEmployee[]=[]
  searchKey:string=''

  constructor(private api:ApiService){
    this.loginDate=new(Date);     

  }


  ngOnInit(): void {
    this.api.getAllEmp().subscribe((data:any)=>{
      console.log(data)
      

      this.allEmployees=data;

    })
    
  }

  filterdev(emp:any){
    if(emp.position.trim().toLowerCase().includes(this.dev)){
      this.result=true;
    }
    else{
      this.result=false;
    }
    return this.result
  }

  filterdes(emp:any){
    if(emp.position.trim().toLowerCase().includes(this.des)){
      this.result=true;
    }
    else{
      this.result=false;
    }
    return this.result
  }
  

  getAllEmp(){
    this.api.getAllEmp().subscribe((data:any)=>{
      this.allEmployees=data;
    })
  }

  deleteEmp(empId:any){
    this.api.deleteEmployee(empId).subscribe((data:any)=>{
      alert('Employee Deleted')
      this.getAllEmp()
    })
  }

  search(event:any){
    // console.log(event)
    this.searchKey=event.target.value;
    // console.log(this.searchKey)
  }
}
