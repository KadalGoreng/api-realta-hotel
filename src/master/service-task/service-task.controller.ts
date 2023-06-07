import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ServiceTaskService } from './service-task.service';
import {
  PaginatedService,
  PaginationOptions,
  serviceDto,
} from './service-task.dto';

@Controller('service-task')
export class ServiceTaskController {
  constructor(private Services: ServiceTaskService) {}
  @Get()
  public async getAll(
    @Query() query: PaginationOptions,
  ): Promise<PaginatedService> {
    const { page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };

    return await this.Services.findAll(options);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async create(@Body() serviceDto: serviceDto) {
    return await this.Services.create(serviceDto);
  }
  @Put(':id')
  public async update(@Param('id') id: number, @Body() serviceDto: serviceDto) {
    return await this.Services.update(id, serviceDto);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}
