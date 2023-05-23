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
  // @Get('user')
  // public async get() {
  //   return await this.paytranService.getAll();
  // }

  @Post()
  public async Create(
    @Body('patr_number') patr_number: string,
    @Body('nominal') nominal: number,
    @Body('patr_type') patr_type: string,
    @Body('patr_note') patr_note: string,
    @Body('order_number') order_number: string,
    @Body('source_id') source_id: string,
    @Body('target_id') target_id: string,
    @Body('number_ref') number_ref: string,
    @Body('user_id') user_id: string,
  ) {
    return await this.paytranService.Create(
      patr_number,
      nominal,
      patr_type,
      patr_note,
      order_number,
      source_id,
      target_id,
      number_ref,
      user_id,
    );
  }
  @Get('search/:keyword')
  public async search(@Param('keyword') keyword: string) {
    return await this.paytranService.Search(keyword);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.paytranService.Delete(id);
  }
}
