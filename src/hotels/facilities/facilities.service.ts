import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'output/entities/Facilities';
import { Repository } from 'typeorm';
import { CreateFacilitiesDto, UpdateFacilitiesDto } from './facilities.dto';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(Facilities)
    private facilitiesRepo: Repository<Facilities>,
  ) {}

  public async findAll(
    options: IPaginationOptions,
    id: number,
  ): Promise<Pagination<Facilities>> {
    const queryBuilder = this.facilitiesRepo
      .createQueryBuilder('c')
      .orderBy('c.faciId', 'ASC')
      .innerJoinAndSelect('c.faciHotel', 'faciHotel')
      .innerJoinAndSelect('c.faciCagro', 'faciCagro')
      .where('faciHotel.hotelId = :hotelid', {
        hotelid: id,
      });
    return paginate<Facilities>(queryBuilder, options);
  }

  // public async findAll() {
  //   return await this.facilitiesRepo.find({
  //     relations: { faciCagro: true, faciHotel: true, facilityPhotos: true },
  //     order: { faciId: 'ASC' },
  //   });
  // }

  public async find(id: number) {
    return await this.facilitiesRepo
      .createQueryBuilder('facilities')
      .leftJoinAndSelect('facilities.faciCagro', 'faciCagro')
      .leftJoinAndSelect('facilities.faciHotel', 'faciHotel')
      .where('faciHotel.hotelId = :id', { id })
      .getMany();
  }

  public async findOne(FaciId: number) {
    return await this.facilitiesRepo.findOne({
      where: {
        faciId: FaciId,
      },
      relations: {
        faciCagro: true,
        faciHotel: true,
      },
    });
  }

  public async Create(createFacilitiesDto: CreateFacilitiesDto) {
    try {
      await this.facilitiesRepo.save({
        ...createFacilitiesDto,
        faciModifiedDate: new Date(),
      });
      return 'Facilities Created successfully';
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, updateFacilitiesDto: UpdateFacilitiesDto) {
    try {
      return await this.facilitiesRepo.update(id, {
        ...updateFacilitiesDto,
        faciModifiedDate: new Date(),
      });
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const hotels = await this.facilitiesRepo.delete(id);
      return hotels;
    } catch (error) {
      return error.message;
    }
  }
}
