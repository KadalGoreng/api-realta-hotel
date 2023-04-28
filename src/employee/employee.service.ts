import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'output/entities/Employee';
import { EmployeePayHistory } from 'output/entities/EmployeePayHistory';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private serviceRepo: Repository<Employee>,
  ) {}

  public async findAll() {
    return await this.serviceRepo
      .createQueryBuilder('employee')
      .innerJoin('employee.empUser', 'users')
      .select([
        'employee.empId',
        'employee.empNationalId',
        'users.userFullName',
        'employee.empBirthDate',
        'employee.empHireDate',
        'employee.empCurrentFlag',
      ])

      .getRawMany();
  }

  // public async findOne(id: number) {
  //   return await this.salaryRepo
  //     .createQueryBuilder('salary')
  //     .innerJoin('salary.ephiEmp', 'employee')
  //     .select(['salary.ephiRateSalary', 'salary.ephiPayFrequence'])
  //     .where('employee.empId = :id', { id })

  //     .getRawMany();
  // }

  public async Create(
    file,
    birth: string,
    flag: string,
    name: string,
    status: string,
    vac: number,
    joro: any,
    epi: any,
    hire: Date,
    gender: string,
    current: number,
    sick: number,
  ) {
    try {
      const emp = await this.serviceRepo.save({
        empNationalId: name,
        empBirthDate: birth,
        empMaritalStatus: status,
        empSalariedFlag: flag,
        empVacationHours: vac,
        empJoro: joro,
        empEmp: epi,
        empHireDate: hire,
        empGender: gender,
        empCurrentFlag: current,
        empSickleaveHourse: sick,
        empPhoto: file.originalname,
      });
      return emp;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    file,
    birth: string,
    flag: string,
    name: string,
    status: string,
    vac: number,
    joro: any,
    epi: any,
    hire: Date,
    gender: string,
    current: number,
    sick: number,
  ) {
    try {
      const emp = await this.serviceRepo.update(id, {
        empNationalId: name,
        empBirthDate: birth,
        empMaritalStatus: status,
        empSalariedFlag: flag,
        empVacationHours: vac,
        empJoro: joro,
        empEmp: epi,
        empHireDate: hire,
        empGender: gender,
        empCurrentFlag: current,
        empSickleaveHourse: sick,
        empPhoto: file.originalname,
      });
      return emp;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const emp = await this.serviceRepo.delete(id);
      return emp;
    } catch (error) {
      return error.message;
    }
  }
}
