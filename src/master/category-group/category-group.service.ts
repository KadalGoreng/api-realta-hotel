import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryGroup } from 'output/entities/CategoryGroup';
import { PolicyCategoryGroup } from 'output/entities/PolicyCategoryGroup';
import { Repository } from 'typeorm';
import { CreateCategoryGroupDto } from './category-group.dto';

@Injectable()
export class CategoryGroupService {
  constructor(
    @InjectRepository(CategoryGroup)
    private categoryGroupRepo: Repository<CategoryGroup>,
    @InjectRepository(PolicyCategoryGroup)
    private policyRepo: Repository<PolicyCategoryGroup>,
  ) {}

  public async findAll() {
    return await this.categoryGroupRepo.find({
      relations: { policyCategoryGroups: { pocaPoli: true, pocaCagro: true } },
      order: { cagroId: 1 },
    });
  }

  public async create(
    file: any,
    categoryGroupDto: CreateCategoryGroupDto,
    poliId: number,
  ) {
    try {
      const categoryGroup = await this.categoryGroupRepo.save({
        ...categoryGroupDto,
        cagroIcon: file.filename,
        cagroIconUrl: file.filename,
      });
      await this.policyRepo.save({
        pocaPoli: { poliId: Number(poliId) },
        pocaCagro: { cagroId: categoryGroup.cagroId },
      });
      return categoryGroup;
    } catch (error) {
      return error.message;
    }
  }

  public async update(
    id: number,
    file: any,
    categoryGroupDto: CreateCategoryGroupDto,
  ) {
    const query = {
      ...categoryGroupDto,
    };
    try {
      if (file) {
        query.cagroIcon = file.filename;
        query.cagroIconUrl = file.filename;
      } else if (categoryGroupDto.poliId) {
        await this.policyRepo.save({
          pocaPoli: { poliId: Number(categoryGroupDto.poliId) },
          pocaCagro: { cagroId: id },
        });
      }
      return await this.categoryGroupRepo.update(id, query);
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      const categoryGroup = await this.categoryGroupRepo.delete(id);

      return categoryGroup;
    } catch (error) {
      return error.message;
    }
  }
}
