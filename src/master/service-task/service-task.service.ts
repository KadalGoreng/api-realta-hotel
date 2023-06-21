import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceTask } from 'output/entities/ServiceTask';
import { FindManyOptions, Repository } from 'typeorm';
import { PaginationOptions, serviceDto } from './service-task.dto';

@Injectable()
export class ServiceTaskService {
  constructor(
    @InjectRepository(ServiceTask)
    private serviceRepo: Repository<ServiceTask>,
  ) {}

  public async findAll(options?: PaginationOptions) {
    const query: FindManyOptions<ServiceTask> = {
      order: { setaId: 1 },
      take: options?.limit,
      skip: (options?.page - 1) * options?.limit,
    };

    const [serviceTask, total] = await this.serviceRepo.findAndCount(query);
    const totalPages = Math.ceil(total / options.limit);

    return {
      data: serviceTask,
      total,
      totalPages,
      limit: options?.limit,
      currentPage: Number(options.page),
      perPage: options.limit,
    };
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
