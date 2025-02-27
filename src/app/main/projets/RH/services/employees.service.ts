import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employe';
import {environment} from '../../../../../environments/environment';
import {SrManagerService} from '../../sr-manager.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  // private employeesUrl = "http://localhost:6105/employe/query/getAllEmployees";
  constructor() {

  }

  //list des employees


  //get employee by id

  // getById(id:number): Observable<Employee>
  // {
  //   return this.httpClient.get<Employee>(`${this.employeesUrl}/${id}`);
  // }
  // //ajouter un employee
  //
  // postEmployee(employee: Employee): Observable<Employee>
  // {
  //   return this.httpClient.post<Employee>(this.employeesUrl, JSON.stringify(employee));
  // }
  //
  // //modifier un employee
  //
  // putEmployee(employee:Employee): Observable<Employee>
  // {
  //   return this.httpClient.put<Employee>(this.employeesUrl,employee);
  // }
  //
  // //delete employee by id
  //
  // deleteById(id:number): Observable<void>
  // {
  //   return this.httpClient.delete<void>(`${this.employeesUrl}/${id}`);
  // }

}
