import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'output/entities/Employee';
import { WorkOrders } from 'output/entities/WorkOrders';
import { WorkOrderDetail } from 'output/entities/WorkOrderDetail';
import { Users } from 'output/entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class WodeService {
  constructor(
    @InjectRepository(WorkOrders)
    private serviceRepo: Repository<WorkOrders>,
    @InjectRepository(WorkOrderDetail)
    private service2Repo: Repository<WorkOrderDetail>,
    @InjectRepository(Employee)
    private service3Repo: Repository<Employee>,
  ) {}
  public async findAll(id: number) {
    return await this.serviceRepo
      .createQueryBuilder('work')
      .innerJoin('work.workOrderDetails', 'wode')
      .innerJoin('wode.wodeEmp', 'employee')
      // .innerJoin('employee.empJoro', 'joro')
      .innerJoin('employee.empUser', 'user')
      .select([
        'wode.wodeId',
        'wode.wodeEmp',
        'wode.wodeTaskName',
        'wode.wodeNotes',
        'wode.wodeStatus',
        'user.userFullName',
      ])
      .where('wode.wodeWoro = :id', { id })
      .getRawMany();
  }

  public async Create(id: any, emp: any, name: string, note: string) {
    try {
      const status = 'Inprogress';
      const wode = await this.service2Repo.save({
        wodeTaskName: name,
        wodeEmp: emp,
        wodeNotes: note,
        wodeStatus: status,
        wodeWoro: id,
      });
      return wode;
    } catch (error) {
      return error.message;
    }
  }

  public async findUsers() {
    return await this.service3Repo
      .createQueryBuilder('emp')
      .innerJoin('emp.empUser', 'users')
      .select(['emp.empId', 'users.userFullName'])
      .getRawMany();
  }

  public async Update(id: any, emp: any, name: string, note: string) {
    return await this.serviceRepo
      .createQueryBuilder()
      .update(WorkOrderDetail)
      .set({
        wodeTaskName: name,
        wodeEmp: emp,
        wodeNotes: note,
      })
      .where('wodeId = :id', { id })
      .execute();
  }

  public async Delete(id: number) {
    return await this.serviceRepo
      .createQueryBuilder()
      .delete()
      .from(WorkOrderDetail)
      .where('wodeId = :id', { id })
      .execute();
  }
}
