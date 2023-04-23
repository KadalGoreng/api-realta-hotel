import {
  Controller,
  Body,
  Put,
  Post,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentTransactionService } from './paytransaction.service';

@Controller('/payment/transaction')
export class PaymentTransactionController {
  constructor(private paytranService: PaymentTransactionService) {}

  @Get()
  public async getAll() {
    return await this.paytranService.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.paytranService.findOne(id);
  }
  @Post()
  public async Create(
    @Body('patr_number') patr_number: string,
    @Body('patr_debet') patr_debet: number,
    @Body('patr_credit') patr_credit: number,
    @Body('patr_type') patr_type: string,
    @Body('patr_note') patr_note: string,
    @Body('order_number') order_number: string,
    @Body('source_id') source_id: number,
    @Body('target_id') target_id: number,
    @Body('number_ref') number_ref: string,
    @Body('user_id') user_id: number,
  ) {
    return await this.paytranService.Create(
      patr_number,
      patr_debet,
      patr_credit,
      patr_type,
      patr_note,
      order_number,
      source_id,
      target_id,
      number_ref,
      user_id,
    );
  }
}
