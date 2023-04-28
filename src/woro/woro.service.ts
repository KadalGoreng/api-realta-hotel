import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'output/entities/Employee';
import { WorkOrders } from 'output/entities/WorkOrders';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';
import { Users } from 'output/entities/Users';

@Injectable()
export class WoroService {
  constructor(
    @InjectRepository(WorkOrders)
    private serviceRepo: Repository<WorkOrders>,

    @InjectRepository(Users)
    private service2Repo: Repository<Users>,
  ) {}
  public async findAll() {
    return await this.serviceRepo
      .createQueryBuilder('work')
      .innerJoin('work.woroUser', 'users')
      .select([
        'work.woroId',
        'work.woroStartDate',
        'work.woroStatus',
        'users.userFullName',
      ])
      .getRawMany();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { woroId: id },
      relations: { woroUser: true },
    });
  }

  public async findUsers() {
    return await this.service2Repo.find({
      select: { userId: true, userFullName: true },
    });
  }

  public async Create(date: Date, user: any) {
    try {
      const status = 'OPEN';
      const woro = await this.serviceRepo.save({
        woroStartDate: date,
        woroStatus: status,
        woroUser: user,
      });
      return woro;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, date: Date, user: any, status: string) {
    try {
      const woro = await this.serviceRepo.update(id, {
        woroStartDate: date,
        woroStatus: status,
        woroUser: user,
      });
      return woro;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const woro = await this.serviceRepo.delete(id);
      return woro;
    } catch (error) {
      return error.message;
    }
  }
}
