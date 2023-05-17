import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  // localhost:/4200
  {
    path:"",redirectTo:'employee/admin',pathMatch:'full'
  },
  {
    path:'employee/admin',component:EmployeeManagerComponent
  },
  {
    path:'employee/add',component:AddEmployeeComponent
  },
  {
    path:'employee/view/:employeeId',component:ViewEmployeeComponent
  },
  {
    path:'employee/update/:id',component:UpdateEmployeeComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
