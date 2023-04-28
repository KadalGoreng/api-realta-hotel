import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('employee')
export class EmployeeController {
  constructor(private Services: EmployeeService) {}
  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async Create(
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('status') status: string,
    @Body('birth') birth: string,
    @Body('flag') flag: string,
    @Body('vac') vac: number,
    @Body('joro') joro: any,
    @Body('epi') epi: any,
    @Body('hire') hire: Date,
    @Body('gender') gender: string,
    @Body('current') current: number,
    @Body('sick') sick: number,
  ) {
    return await this.Services.Create(
      file,
      name,
      status,
      birth,
      flag,
      vac,
      joro,
      epi,
      hire,
      gender,
      current,
      sick,
    );
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file'))
  public async Update(
    @Param('id') id: number,
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('status') status: string,
    @Body('birth') birth: string,
    @Body('flag') flag: string,
    @Body('vac') vac: number,
    @Body('joro') joro: any,
    @Body('epi') epi: any,
    @Body('hire') hire: Date,
    @Body('gender') gender: string,
    @Body('current') current: number,
    @Body('sick') sick: number,
  ) {
    return await this.Services.Update(
      id,
      file,
      name,
      status,
      birth,
      flag,
      vac,
      joro,
      epi,
      hire,
      gender,
      current,
      sick,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
