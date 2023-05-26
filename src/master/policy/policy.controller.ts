import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PolicyService } from './policy.service';

@Controller('policy')
export class PolicyController {
  constructor(private Services: PolicyService) {}
  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async create(@Body() poliName: string, poliDescription: string) {
    return await this.Services.create(poliDescription, poliName);
  }
  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() poliName: string,
    poliDescription: string,
  ) {
    return await this.Services.update(id, poliName, poliDescription);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}
