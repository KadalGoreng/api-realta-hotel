import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccounts } from 'output/entities/UserAccounts';
import { Repository } from 'typeorm';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectRepository(UserAccounts)
    private useraccRepo: Repository<UserAccounts>,
  ) {}

  public async findAll() {
    return await this.useraccRepo.find();
  }

  public async findOne(id: number) {
    return await this.useraccRepo.findOne({ where: { usacEntityId: id } });
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
      const usac = await this.useraccRepo.save({
        usacEntityId: usac_entityId,
        usacUserId: usacUs_id,
        usacAccountNumber: usacAccnumber,
        usacSaldo: usac_saldo,
        usacType: usac_type,
        usacExpmonth: usac_exp_month,
        usacExpyear: usac_exp_year,
        usacModifiedDate: new Date(),
      });
      return usac;
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
          usacAccountNumber: account,
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
}
