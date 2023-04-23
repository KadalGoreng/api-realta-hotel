import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentTransaction } from 'output/entities/PaymentTransaction';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private paytranRepo: Repository<PaymentTransaction>,
  ) {}

  public async findAll() {
    return await this.paytranRepo.find();
  }

  public async findOne(id: number) {
    return await this.paytranRepo.findOne({ where: { patrId: id } });
  }

  public async Create(
    patr_number: string,
    patr_debet: number,
    patr_credit: number,
    patr_type: string,
    patr_note: string,
    order_number: string,
    source_id: number,
    target_id: number,
    number_ref: string,
    user_id: number,
  ) {
    try {
      const transaction = await this.paytranRepo.save({
        // patrTrx_Id: patr_number,
        // patrDebet: patr_debet,
        // patrCredit: patr_credit,
        // patrtype: patr_type,
        // patrNote: patr_note,
        // patrOrderNumber: order_number,
        // patrSourceId: source_id,
        // patrTargetId: target_id,
        // patrTrxNumberRef: number_ref,
        // patrModifiedDate: new Date(),
      });
      return transaction;
    } catch (error) {
      return error.message;
    }
  }
}
