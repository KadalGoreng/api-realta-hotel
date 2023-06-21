import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccounts } from 'output/entities/UserAccounts';
import { Repository, ILike } from 'typeorm';
import { Bank } from 'output/entities/Bank';
import { PaymentGateway } from 'output/entities/PaymentGateway';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectRepository(UserAccounts)
    private useraccRepo: Repository<UserAccounts>,
    @InjectRepository(Bank) private bankRepo: Repository<Bank>,
    @InjectRepository(PaymentGateway)
    private pagaRepo: Repository<PaymentGateway>,
  ) {}

  public async findAll() {
    return await this.useraccRepo.find({
      relations: ['usacEntity', 'usacEntity.bank', 'usacEntity.paymentGateway'],
    });
  }

  public async findByUser(id: number) {
    return await this.useraccRepo.find({
      where: { usacUserId: id },
      relations: ['usacEntity', 'usacEntity.bank', 'usacEntity.paymentGateway'],
    });
  }

  public async findOne(id: string) {
    return await this.useraccRepo.findOne({
      where: { usacAccountNumber: id },
      relations: ['usacEntity', 'usacEntity.bank', 'usacEntity.paymentGateway'],
    });
  }

  public async Create(
    usac_entityId: number,
    usacUs_id: number,
    usacAccnumber: string,
    usac_saldo: string,
    usac_type: string,
    usac_exp_month: number,
    usac_exp_year: number,
  ) {
    try {
      await this.useraccRepo.save({
        usacEntityId: usac_entityId,
        usacUserId: usacUs_id,
        usacAccountNumber: usacAccnumber,
        usacSaldo: usac_saldo,
        usacType: usac_type,
        usacExpmonth: usac_exp_month,
        usacExpyear: usac_exp_year,
        usacModifiedDate: new Date(),
      });

      return await this.useraccRepo.findOne({
        where: { usacUserId: usacUs_id },
        relations: [
          'usacEntity',
          'usacEntity.bank',
          'usacEntity.paymentGateway',
        ],
      });
    } catch (error) {
      return error.message;
    }
  }
  public async Update(
    entity: number,
    user: number,
    account: string,
    usac_entityId: number,
    usacUs_id: number,
    usacAccnumber: string,
    usac_saldo: string,
    usac_type: string,
    usac_exp_month: number,
    usac_exp_year: number,
  ) {
    try {
      const usac = await this.useraccRepo.update(
        {
          usacEntityId: entity,
          usacUserId: user,
        },
        {
          usacEntityId: usac_entityId,
          usacUserId: usacUs_id,
          usacAccountNumber: usacAccnumber,
          usacSaldo: usac_saldo,
          usacType: usac_type,
          usacExpmonth: usac_exp_month,
          usacExpyear: usac_exp_year,
          usacModifiedDate: new Date(),
        },
      );
      return usac;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const usac = await this.useraccRepo.delete(id);
      return usac;
    } catch (error) {
      return error.message;
    }
  }

  public async Search(keyword: string, user: number) {
    try {
      const bank = await this.bankRepo.findBy({
        bankName:
          ILike(`%${keyword}%`) || ILike(`%${keyword}`) || ILike(`${keyword}%`),
      });
      const fintech = await this.pagaRepo.findBy({
        pagaName:
          ILike(`%${keyword}%`) || ILike(`%${keyword}`) || ILike(`${keyword}%`),
      });
      const account = [];
      // const accountPaga = [];
      for (let i = 0; i < bank.length; i++) {
        account.push(
          await this.useraccRepo.findBy({
            usacEntityId: bank[i]['bankEntityId'],
          }),
        );
      }
      for (let j = 0; j < fintech.length; j++) {
        account.push(
          await this.useraccRepo.findBy({
            usacEntityId: fintech[j]['pagaEntityId'],
          }),
        );
      }
      // const account = accountPaga.concat(account);
      const acc =
        account[account[account.find((item) => item.usacUserId == 17)]];
      return acc;
    } catch (error) {
      return error.message;
    }
  }
}
