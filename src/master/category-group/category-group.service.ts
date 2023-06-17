import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryGroup } from 'output/entities/CategoryGroup';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryGroupService {
  constructor(
    @InjectRepository(CategoryGroup)
    private categoryGroupRepo: Repository<CategoryGroup>,
  ) {}

  public async findAll() {
    return await this.categoryGroupRepo.find();
  }
}