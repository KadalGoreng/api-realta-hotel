import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'output/entities/Employee';
import { EmployeePayHistory } from 'output/entities/EmployeePayHistory';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';

import { Repository } from 'typeorm';

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(EmployeeDepartmentHistory)
    private serviceRepo: Repository<EmployeeDepartmentHistory>,
    @InjectRepository(Employee) private service2Repo: Repository<Employee>,
  ) {}
  public async findOne(id: number) {
    return await this.service2Repo
      .createQueryBuilder('employee')
      .innerJoin('employee.employeeDepartmentHistory', 'dephis')
      .innerJoin('dephis.edhiShift', 'shift')
      .select(['shift.shiftName', 'shift.shiftStartTime', 'shift.shiftEndTime'])
      .where('employee.empId = :id', { id })
      .getRawMany();
  }

  public async Update(id: any, shift: any) {
    return await this.serviceRepo
      .createQueryBuilder()
      .update(EmployeeDepartmentHistory)
      .set({
        edhiShift: shift,
        edhiModifiedDate: new Date(),
      })
      .where('edhiEmp = :id', { id })
      .execute();
  }
}
