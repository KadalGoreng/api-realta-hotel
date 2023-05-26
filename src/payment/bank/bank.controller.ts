import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BankService } from './bank.service';

@Controller('payment/bank')
export class BankController {
  constructor(private bankService: BankService) {}

  @Get()
  public async getAll() {
    return await this.bankService.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.bankService.findOne(id);
  }
  @Post()
  public async Create(
    @Body('bank_code') bank_code: string,
    @Body('bank_name') bank_name: string,
  ) {
    return await this.bankService.Create(bank_code, bank_name);
  }
  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('bank_code') bank_code: string,
    @Body('bank_name') bank_name: string,
  ) {
    return await this.bankService.Update(id, bank_code, bank_name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.bankService.Delete(id);
  }
}
