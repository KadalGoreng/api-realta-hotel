import {
  Controller,
  Body,
  Put,
  Post,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentGatewayService } from './paygateway.service';

@Controller('/payment/gateway')
export class PaymentGatewayController {
  constructor(private paygatService: PaymentGatewayService) {}

  @Get()
  public async getAll() {
    return await this.paygatService.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.paygatService.findOne(id);
  }
  @Post()
  public async Create(
    @Body('paga_code') paga_code: string,
    @Body('paga_name') paga_name: string,
  ) {
    return await this.paygatService.Create(paga_code, paga_name);
  }
  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('paga_code') paga_code: string,
    @Body('paga_name') paga_name: string,
  ) {
    return await this.paygatService.Update(id, paga_code, paga_name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.paygatService.Delete(id);
  }
  @Get('search/:keyword')
  public async search(@Param('keyword') keyword: string) {
    return await this.paygatService.Search(keyword);
  }
}
