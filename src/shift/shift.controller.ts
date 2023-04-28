import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ShiftService } from './shift.service';

@Controller('shift')
export class ShiftController {
  constructor(private Services: ShiftService) {}
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Put(':id')
  public async Create(@Param('id') id: number, @Body('shift') shift: number) {
    return await this.Services.Update(id, shift);
  }
}
