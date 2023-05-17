import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allEmployees: any=[], searchKey:string,propName:string): any[] {
      const result:any=[]
    
      if(!allEmployees||searchKey==''||propName==''){
        return allEmployees;
      }
    
    allEmployees.forEach((emp:any)=>{
      if(emp[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(emp)
      }
    })


    return result;
  }

}
