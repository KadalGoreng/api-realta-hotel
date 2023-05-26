import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'output/entities/Bank';
import { PaymentGateway } from 'output/entities/PaymentGateway';
import { PaymentTransaction } from 'output/entities/PaymentTransaction';
import { Users } from 'output/entities/Users';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private paytranRepo: Repository<PaymentTransaction>,
    @InjectRepository(Bank) private bankRepo: Repository<Bank>,
    @InjectRepository(PaymentGateway)
    private pagaRepo: Repository<PaymentGateway>,
  ) {}

  public async findAll() {
    return await this.paytranRepo.find({
      relations: ['patrUser'],
    });
  }
  public async findOne(id: number) {
    return await this.paytranRepo.findOne({ where: { patrId: id } });
  }

  // public async filter(type: string) {
  //   return await this.paytranRepo.findOne({ where: { patrId: id } });
  // }

  public async Create(
    patr_number: string,
    patr_debet: string,
    patr_credit: string,
    patr_type: string,
    patr_note: string,
    order_number: string,
    source_id: string,
    target_id: string,
    number_ref: string,
    user_id: string,
  ) {
    try {
      const transaction = await this.paytranRepo.save({
        patrTrxId: patr_number,
        patrDebet: patr_debet,
        patrCredit: patr_credit,
        patrType: patr_type,
        patrNote: patr_note,
        patrOrderNumber: order_number,
        patrSourceId: source_id,
        patrTargetId: target_id,
        patrTrxNumberRef: number_ref,
        patrModifiedDate: new Date(),
        patrUserId: user_id,
      });
      return transaction;
    } catch (error) {
      return error.message;
    }
  }

  public async Search(keyword: string) {
    try {
      return await this.paytranRepo.find({
        where: {
          patrTrxId:
            ILike(`%${keyword}%`) ||
            ILike(`%${keyword}`) ||
            ILike(`${keyword}%`),
        },
        relations: ['patrUser'],
      });
    } catch (error) {
      return error.message;
    }
  }
  public async Delete(id: number) {
    try {
      const paga = await this.paytranRepo.delete(id);
      return paga;
    } catch (error) {
      return error.message;
    }
  }
}
