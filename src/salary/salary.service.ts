import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'output/entities/Employee';
import { EmployeePayHistory } from 'output/entities/EmployeePayHistory';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';

@Injectable()
export class SalaryService {
  constructor(
    @InjectRepository(EmployeePayHistory)
    private serviceRepo: Repository<EmployeePayHistory>,
  ) {}

  public async findAll(id: number) {
    return await this.serviceRepo
      .createQueryBuilder('salary')
      .innerJoin('salary.ephiEmp', 'employee')
      .select([
        'salary.ephiRateSalary',
        'salary.ephiPayFrequence',
        'salary.ephiEmp',
      ])
      .where('employee.empId = :id', { id })
      .getRawMany();
  }

  public async Create(id: any, salary: string, pay: number) {
    try {
      const department = await this.serviceRepo.save({
        ephiEmp: id,
        ephiRateChangeDate: new Date(),
        ephiRateSalary: salary,
        ephiPayFrequence: pay,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: any, salary: string, pay: number) {
    return await this.serviceRepo
      .createQueryBuilder()
      .update(EmployeePayHistory)
      .set({
        ephiModifiedDate: new Date(),
        ephiRateSalary: salary,
        ephiPayFrequence: pay,
      })
      .where('ephiEmp = :id', { id })
      .execute();
  }

  public async Delete(id: number) {
    return await this.serviceRepo
      .createQueryBuilder()
      .delete()
      .from(EmployeePayHistory)
      .where('ephiEmp = :id', { id })
      .execute();
  }
  //   return await this.serviceRepo
  //     .createQueryBuilder('salary')
  //     .innerJoin('salary.ephiEmp', 'employee')
  //     .insert()
  //     .into(EmployeePayHistory)
  //     .values({
  //       ephiEmp: id,
  //       ephiRateChangeDate: dates,
  //       ephiRateSalary: salary,
  //       ephiPayFrequence: pay,
  //     })

  //     .execute();
  // }
}
