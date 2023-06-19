import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private Services: EmployeeService) {}

  @Get()
  public async getAll() {
    return await this.Services.get();
  }
}
