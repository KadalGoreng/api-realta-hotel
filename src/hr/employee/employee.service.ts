import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'output/entities/Employee';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private serviceRepo: Repository<Employee>,
  ) {}

  public async get() {
    return await this.serviceRepo.find();
  }
}
