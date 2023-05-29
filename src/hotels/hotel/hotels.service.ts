import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotels } from 'output/entities/Hotels';
import { Repository } from 'typeorm';
import { createHotelsDto, updateHotelsDto } from './hotels.dto';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotels) private hotelsRepo: Repository<Hotels>,
  ) {}

  public async findAll() {
    return await this.hotelsRepo.find({
      relations: ['hotelAddr'],
    });
  }

  public async findOne(id: number) {
    return await this.hotelsRepo.findOne({
      where: {
        hotelId: id,
      },
      relations: ['hotelAddr'],
    });
  }

  public async Create(createHotelsDto: createHotelsDto) {
    try {
      return await this.hotelsRepo.save(createHotelsDto);
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, updateHotelsDto: updateHotelsDto) {
    try {
      return await this.hotelsRepo.update(id, updateHotelsDto);
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const hotels = await this.hotelsRepo.delete(id);
      return hotels;
    } catch (error) {
      return error.message;
    }
  }
}
