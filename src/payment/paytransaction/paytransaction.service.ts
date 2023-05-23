import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentTransaction } from 'output/entities/PaymentTransaction';
import { UserAccounts } from 'output/entities/UserAccounts';
import { Users } from 'output/entities/Users';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private paytranRepo: Repository<PaymentTransaction>,
    @InjectRepository(UserAccounts)
    private accountsRepo: Repository<UserAccounts>,
    @InjectRepository(Users)
    private usersRepo: Repository<Users>,
  ) {}

  public async findAll() {
    return await this.paytranRepo.find({
      relations: ['patrUser'],
    });
  }
  public async findOne(id: number) {
    return await this.paytranRepo.findOne({ where: { patrId: id } });
  }

  public async Create(
    patr_number: string,
    nominal: number,
    patr_type: string,
    patr_note: string,
    order_number: string,
    source_id: string,
    target_id: string,
    number_ref: string,
    user_id: string,
  ) {
    try {
      const userSrc = await this.accountsRepo.findOneBy({
        usacAccountNumber: source_id,
      });

      const transaction = await this.paytranRepo.save({
        patrTrxId: patr_number,
        patrDebet: nominal,
        patrType: patr_type,
        patrNote: patr_note,
        patrOrderNumber: order_number,
        patrSourceId: source_id,
        patrTargetId: target_id,
        patrTrxNumberRef: number_ref,
        patrModifiedDate: new Date(),
        patrUserId: userSrc.usacUserId.toString(),
      });

      const user = await this.accountsRepo.findOneBy({
        usacAccountNumber: target_id,
      });

      await this.paytranRepo.save({
        patrTrxId: patr_number + '-IN',
        patrCredit: nominal,
        patrType: patr_type,
        patrNote: patr_note,
        patrOrderNumber: order_number + '-IN',
        patrSourceId: source_id,
        patrTargetId: target_id,
        patrTrxNumberRef: number_ref,
        patrModifiedDate: new Date(),
        patrUserId: user.usacUserId.toString(),
      });

      const source = await this.accountsRepo.findOneBy({
        usacAccountNumber: source_id,
      });

      source.usacSaldo = source.usacSaldo - nominal;
      source.usacModifiedDate = new Date();
      await this.accountsRepo.save(source);

      const target = await this.accountsRepo.findOneBy({
        usacAccountNumber: target_id,
      });

      target.usacSaldo = target.usacSaldo + nominal;
      target.usacModifiedDate = new Date();
      await this.accountsRepo.save(target);

      return target;
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

  public async Refund(
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
      // const transaction = await this.paytranRepo.save({
      //   patrTrxId: patr_number,
      //   patrDebet: patr_debet,
      //   patrCredit: patr_credit,
      //   patrType: patr_type,
      //   patrNote: patr_note,
      //   patrOrderNumber: order_number,
      //   patrSourceId: source_id,
      //   patrTargetId: target_id,
      //   patrTrxNumberRef: number_ref,
      //   patrModifiedDate: new Date(),
      //   patrUserId: user_id,
      // });
      // return transaction;
      return '';
    } catch (error) {
      return error.message;
    }
  }
}
