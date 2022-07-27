import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../employe-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee = {} as IEmployee;
  employees= [] as IEmployee[];
  isEdit= false;
constructor() { }

  ngOnInit(): void {
    this.employees=[
    
    ];
  }

  addEmployee(form:NgForm){
    if(!this.isEdit){
      this.employees.push(this.employee);
      alert("Employee Added");
    }
    else{
      alert("Employee Updated");
    }
    this.employee={} as IEmployee;
    form.resetForm();
    this.isEdit=false;
  }
  editEmployee(emp: IEmployee){
    this.employee=Object.assign({},emp);
    this.isEdit=true;
  }
  deleteEmployee(emp:IEmployee){
    let pos=this.employees.indexOf(emp);
    this.employees.splice(pos,1);
    alert("Record Deleted");
  }
}














