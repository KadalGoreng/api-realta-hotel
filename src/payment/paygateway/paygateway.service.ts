import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentGateway } from 'output/entities/PaymentGateway';
import { Repository } from 'typeorm';
import { Entitys } from 'output/entities/Entitys';

@Injectable()
export class PaymentGatewayService {
  constructor(
    @InjectRepository(PaymentGateway)
    private pagaRepo: Repository<PaymentGateway>,
    @InjectRepository(Entitys) private entityRepo: Repository<Entitys>,
  ) {}

  public async findAll() {
    return await this.pagaRepo.find();
  }

  public async findOne(id: number) {
    return await this.pagaRepo.findOne({ where: { pagaEntityId: id } });
  }

  public async Create(paga_code: string, paga_name: string) {
    try {
      const entity = await this.entityRepo.save({});
      const { ...result } = entity;
      const paga = await this.pagaRepo.save({
        pagaEntityId: result.entityId,
        pagaCode: paga_code,
        pagaName: paga_name,
        pagaModifiedDate: new Date(),
      });
      return paga;
    } catch (error) {
      return error.message;
    }
  }
  public async Update(id: number, paga_code: string, paga_name: string) {
    try {
      const paga = await this.pagaRepo.update(id, {
        pagaCode: paga_code,
        pagaName: paga_name,
        pagaModifiedDate: new Date(),
      });
      return paga;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const paga = await this.pagaRepo.delete(id);
      return paga;
    } catch (error) {
      return error.message;
    }
  }
}
