import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'output/entities/Bank';
import { Entitys } from 'output/entities/Entitys';
import { PaymentGateway } from 'output/entities/PaymentGateway';
import { PaymentTransaction } from 'output/entities/PaymentTransaction';
import { UserAccounts } from 'output/entities/UserAccounts';
import { Users } from 'output/entities/Users';
import { BankController } from 'src/payment/bank/bank.controller';
import { BankService } from 'src/payment/bank/bank.service';
import { PaymentGatewayController } from 'src/payment/paygateway/paygateway.controller';
import { PaymentGatewayService } from 'src/payment/paygateway/paygateway.service';
import { PaymentTransactionController } from 'src/payment/paytransaction/paytransaction.controller';
import { PaymentTransactionService } from 'src/payment/paytransaction/paytransaction.service';
import { UserAccountController } from 'src/payment/useraccount/useraccount.controller';
import { UserAccountService } from 'src/payment/useraccount/useraccount.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bank,
      Entitys,
      PaymentGateway,
      PaymentTransaction,
      UserAccounts,
      Users,
    ]),
  ],
  controllers: [
    BankController,
    PaymentGatewayController,
    PaymentTransactionController,
    UserAccountController,
  ],
  providers: [
    BankService,
    PaymentGatewayService,
    PaymentTransactionService,
    UserAccountService,
  ],
  exports: [
    BankService,
    PaymentGatewayService,
    PaymentTransactionService,
    UserAccountService,
  ],
})
export class ModuleModule {}
