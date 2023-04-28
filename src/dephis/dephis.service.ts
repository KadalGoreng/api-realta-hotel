import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'output/entities/Employee';
import { EmployeePayHistory } from 'output/entities/EmployeePayHistory';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';

@Injectable()
export class DephisService {
  constructor(
    @InjectRepository(EmployeeDepartmentHistory)
    private serviceRepo: Repository<EmployeeDepartmentHistory>,
    @InjectRepository(Employee) private service2Repo: Repository<Employee>,
  ) {}
  public async findOne(id: number) {
    return await this.service2Repo
      .createQueryBuilder('employee')
      .innerJoin('employee.employeeDepartmentHistory', 'dephis')
      .innerJoin('dephis.edhiDept', 'dept')
      .select([
        'dephis.edhiDept',
        'dept.deptName',
        'dephis.edhiStartDate',
        'dephis.edhiEndDate',
      ])
      .where('employee.empId = :id', { id })

      .getRawMany();
  }

  public async Create(id: any, dep: any, start: Date, udate: Date, shift: any) {
    try {
      const dephis = await this.serviceRepo.save({
        edhiEmpId: id,
        edhiDept: dep,
        edhiStartDate: start,
        edhiEndDate: udate,
        edhiShift: shift,
      });
      return dephis;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: any, dep: any, start: Date, udate: Date) {
    return await this.serviceRepo
      .createQueryBuilder()
      .update(EmployeeDepartmentHistory)
      .set({
        edhiDept: dep,
        edhiStartDate: start,
        edhiEndDate: udate,
        edhiModifiedDate: new Date(),
      })
      .where('edhiEmp = :id', { id })
      .execute();
  }

  public async Delete(id: number) {
    return await this.serviceRepo
      .createQueryBuilder()
      .delete()
      .from(EmployeeDepartmentHistory)
      .where('edhiEmp = :id', { id })
      .execute();
  }
}
