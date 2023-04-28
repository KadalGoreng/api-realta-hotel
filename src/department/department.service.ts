import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'output/entities/Department';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department) private serviceRepo: Repository<Department>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }
  public async findOne(id: number) {
    return await this.serviceRepo.findOne({ where: { deptId: id } });
  }

  public async Create(name: string) {
    try {
      const department = await this.serviceRepo.save({
        deptName: name,
        deptModifiedDate: new Date(),
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string, date: Date) {
    try {
      const department = await this.serviceRepo.update(id, {
        deptName: name,
        deptModifiedDate: date,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const department = await this.serviceRepo.delete(id);
      return department;
    } catch (error) {
      return error.message;
    }
  }
}
