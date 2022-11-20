
import { Observable} from 'rxjs'

import { Employee } from './employee';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService{

  private apiServeUrl=environment.apiBaseUrl;

  constructor(private http : HttpClient){
  }

  public getEmployees() : Observable<Employee[]>{

      let bufferurl:string = this.apiServeUrl + "/employee/all";

      return this.http.get<Employee[]>(bufferurl);
  }

  public addEmployees(employee:Employee) : Observable<Employee>{

      let bufferurl:string = this.apiServeUrl + "/employee/add";
      return this.http.post <Employee>(bufferurl, employee);
  }

  public updateEmployees(employee:Employee) : Observable<Employee>{

      let bufferurl:string = this.apiServeUrl + "/employee/update";
      return this.http.put <Employee>(bufferurl, employee);
  }

  
  public deleteEmployees(employeeId:number) : Observable<Employee>{

     let  param:HttpParams = new HttpParams();

     param = param.append("id", employeeId);
      let bufferurl:string = this.apiServeUrl + "/employee/delete";
      return this.http.delete<Employee>(bufferurl, {params:param});
  }

}