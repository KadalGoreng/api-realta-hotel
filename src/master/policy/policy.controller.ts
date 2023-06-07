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
import { PolicyService } from './policy.service';
import { PaginatedPolicy, PaginationOptions } from './policy.dto';

@Controller('policy')
export class PolicyController {
  constructor(private Services: PolicyService) {}

  @Get()
  public async getPaginate(
    @Query() query: PaginationOptions,
  ): Promise<PaginatedPolicy> {
    const { page, limit } = query;

    const options: PaginationOptions = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
    };

    return await this.Services.findPaginate(options);
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async create(
    @Body('poliName') poliName: string,
    @Body('poliDescription') poliDescription: string,
  ) {
    return await this.Services.create(poliDescription, poliName);
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body('poliName') poliName: string,
    @Body('poliDescription') poliDescription: string,
  ) {
    return await this.Services.update(id, poliName, poliDescription);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}
