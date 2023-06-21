import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Bank } from 'output/entities/Bank';
import { Entitys } from 'output/entities/Entitys';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank) private bankRepo: Repository<Bank>,
    @InjectRepository(Entitys) private entityRepo: Repository<Entitys>,
  ) {}

  public async findAll() {
    return await this.bankRepo.find();
  }

  public async findOne(id: number) {
    return await this.bankRepo.findOne({ where: { bankEntityId: id } });
  }

  public async Create(bank_code: string, bank_name: string) {
    try {
      const entity = await this.entityRepo.save({});
      const { ...result } = entity;
      const bank = await this.bankRepo.save({
        bankEntityId: result.entityId,
        bankCode: bank_code,
        bankName: bank_name,
        bankModifiedDate: new Date(),
      });
      return bank;
    } catch (error) {
      return error.message;
    }
  }
  public async Update(id: number, bank_code: string, bank_name: string) {
    try {
      const bank = await this.bankRepo.update(id, {
        bankCode: bank_code,
        bankName: bank_name,
        bankModifiedDate: new Date(),
      });
      return bank;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const bank = await this.bankRepo.delete(id);
      return bank;
    } catch (error) {
      return error.message;
    }
  }

  public async Search(keyword: string) {
    try {
      return await this.bankRepo.findBy({
        bankName:
          ILike(`%${keyword}%`) || ILike(`%${keyword}`) || ILike(`${keyword}%`),
      });
    } catch (error) {
      return error.message;
    }
  }
}
