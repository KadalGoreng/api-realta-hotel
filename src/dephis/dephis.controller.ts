import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DephisService } from './dephis.service';

@Controller('dephis')
export class DephisController {
  constructor(private Services: DephisService) {}
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post(':id')
  public async Create(
    @Param('id') id: number,
    @Body('dep') dep: number,
    @Body('start') start: Date,
    @Body('udate') udate: Date,
    @Body('shift') shift: number,
  ) {
    return await this.Services.Create(id, dep, start, udate, shift);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('dep') dep: number,
    @Body('start') start: Date,
    @Body('udate') udate: Date,
  ) {
    return await this.Services.Update(id, dep, start, udate);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
