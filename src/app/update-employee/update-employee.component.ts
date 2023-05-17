import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyEmployee } from 'src/model/myEmployee';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empId:string=''
  emp:MyEmployee={}
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private route:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.empId=data.id
      console.log(this.empId)

      this.api.viewEmployee(this.empId).subscribe((data:any)=>{
        this.emp=data;
      })
    })
  }

  updateEmployee(){
    this.api.updateEmployee(this.empId,this.emp).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }

}
