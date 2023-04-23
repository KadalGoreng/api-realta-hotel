import {
  Controller,
  Body,
  Put,
  Post,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { UserAccountService } from './useraccount.service';

@Controller('/payment/useraccount')
export class UserAccountController {
  constructor(private useraccService: UserAccountService) {}

  @Get()
  public async getAll() {
    return await this.useraccService.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.useraccService.findOne(id);
  }
  @Post()
  public async Create(
    @Body('usac_entity_id') usac_entity_id: number,
    @Body('usac_user_id') usac_user_id: number,
    @Body('usac_acc_number') usac_acc_number: string,
    @Body('usac_saldo') usac_saldo: string,
    @Body('usac_type') usac_type: string,
    @Body('usac_exp_month') usac_exp_month: number,
    @Body('usac_exp_year') usac_exp_year: number,
  ) {
    return await this.useraccService.Create(
      usac_entity_id,
      usac_user_id,
      usac_acc_number,
      usac_saldo,
      usac_type,
      usac_exp_month,
      usac_exp_year,
    );
  }
  @Put(':entity/:user/:account')
  public async Update(
    @Param('entity') entity: number,
    @Param('user') user: number,
    @Param('account') account: string,
    @Body('usac_entity_id') usac_entity_id: number,
    @Body('usac_user_id') usac_user_id: number,
    @Body('usac_acc_number') usac_acc_number: string,
    @Body('usac_saldo') usac_saldo: string,
    @Body('usac_type') usac_type: string,
    @Body('usac_exp_month') usac_exp_month: number,
    @Body('usac_exp_year') usac_exp_year: number,
  ) {
    return await this.useraccService.Update(
      entity,
      user,
      account,
      usac_entity_id,
      usac_user_id,
      usac_acc_number,
      usac_saldo,
      usac_type,
      usac_exp_month,
      usac_exp_year,
    );
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.useraccService.Delete(id);
  }
  @Get('search/:keyword/:user')
  public async search(
    @Param('keyword') keyword: string,
    @Param('user') user: number,
  ) {
    return await this.useraccService.Search(keyword, user);
  }
}
