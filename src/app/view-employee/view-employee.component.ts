import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  
  empId:any;
  employee:any;
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      this.empId=data.employeeId;
      console.log(this.empId)
    })

    this.api.viewEmployee(this.empId).subscribe((data:any)=>{
      this.employee=data;
      // console.log(data)
    })
    }
}
