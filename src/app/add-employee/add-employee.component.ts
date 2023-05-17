import { Component,OnInit } from '@angular/core';
import { MyEmployee } from 'src/model/myEmployee';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:MyEmployee={}

  constructor(private api:ApiService, private route:Router){}

  ngOnInit(): void {
    
  }

  addEmployee(){
    this.api.addEmployee(this.employee).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }


}
