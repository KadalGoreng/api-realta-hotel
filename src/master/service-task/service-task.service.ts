import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceTask } from 'output/entities/ServiceTask';
import { Repository } from 'typeorm';
import { serviceDto } from './service-task.dto';

@Injectable()
export class ServiceTaskService {
  constructor(
    @InjectRepository(ServiceTask)
    private serviceRepo: Repository<ServiceTask>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({ order: { setaId: 1 } });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { setaId: id },
    });
  }

  public async create(serviceDto: serviceDto) {
    try {
      const master = await this.serviceRepo.save({
        ...serviceDto,
      });
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, serviceDto: serviceDto) {
    try {
      const master = await this.serviceRepo.update(id, {
        ...serviceDto,
      });
      return master;
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      const master = await this.serviceRepo.delete(id);
      return master;
    } catch (error) {
      return error.message;
    }
  }
}
