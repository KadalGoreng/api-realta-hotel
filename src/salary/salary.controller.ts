import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SalaryService } from './salary.service';

@Controller('salary')
export class SalaryController {
  constructor(private Services: SalaryService) {}

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findAll(id);
  }

  @Post(':id')
  public async Create(
    @Param('id') id: number,
    @Body('salary') salary: string,
    @Body('pay') pay: number,
  ) {
    return await this.Services.Create(id, salary, pay);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('salary') salary: string,
    @Body('pay') pay: number,
  ) {
    return await this.Services.Update(id, salary, pay);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
