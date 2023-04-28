import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WodeService } from './wode.service';

@Controller('wode')
export class WodeController {
  constructor(private Services: WodeService) {}
  @Get('/users')
  public async getAll2() {
    return await this.Services.findUsers();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findAll(id);
  }

  @Post(':id')
  public async Create(
    @Body('id') id: number,
    @Body('emp') emp: number,
    @Body('name') name: string,
    @Body('note') note: string,
  ) {
    return await this.Services.Create(id, emp, name, note);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('emp') emp: number,
    @Body('name') name: string,
    @Body('note') note: string,
  ) {
    return await this.Services.Update(id, emp, name, note);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
