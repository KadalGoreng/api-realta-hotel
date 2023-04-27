import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { RestoMenus } from '../../output/entities/RestoMenus';

@Injectable()
export class RestoMenusService {
  constructor(
    @InjectRepository(RestoMenus)
    private readonly restoMenusRepository: Repository<RestoMenus>,
  ) {}

  async findAll(): Promise<RestoMenus[]> {
    return this.restoMenusRepository.find();
  }

  async findOne(id: string): Promise<RestoMenus> {
    const findOneOptions: FindOneOptions<RestoMenus> = {
      where: { remeId: id },
    };
    return this.restoMenusRepository.findOne(findOneOptions);
  }

  async create(restoMenu: RestoMenus): Promise<RestoMenus> {
    return this.restoMenusRepository.save(restoMenu);
  }

  async update(id: string, restoMenu: RestoMenus): Promise<RestoMenus> {
    const updatedRestoMenu = await this.restoMenusRepository.findOne(id);
    updatedRestoMenu.remeFaciId = restoMenu.remeFaciId;
    updatedRestoMenu.remeName = restoMenu.remeName;
    updatedRestoMenu.remeDescription = restoMenu.remeDescription;
    updatedRestoMenu.remePrice = restoMenu.remePrice;
    updatedRestoMenu.remeStatus = restoMenu.remeStatus;
    updatedRestoMenu.remeModifiedDate = new Date();

    return this.restoMenusRepository.save(updatedRestoMenu);
  }
}
