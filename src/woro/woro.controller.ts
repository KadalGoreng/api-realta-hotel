import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WoroService } from './woro.service';

@Controller('/woro')
export class WoroController {
  constructor(private Services: WoroService) {}

  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }

  @Get('/users')
  public async getAll2() {
    return await this.Services.findUsers();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(@Body('date') date: Date, @Body('user') user: number) {
    return await this.Services.Create(date, user);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('date') date: Date,
    @Body('user') user: number,
    @Body('status') status: string,
  ) {
    return await this.Services.Update(id, date, user, status);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
