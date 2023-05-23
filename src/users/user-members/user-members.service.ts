import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMembers } from 'output/entities/UserMembers';
import { Repository } from 'typeorm';

@Injectable()
export class UserMembersService {
  constructor(
    @InjectRepository(UserMembers)
    private serviceRepo: Repository<UserMembers>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: {
        usmeMembName: true,
        usmeUser: true,
      },
    });
  }

  public async findOne(usmeUserId: number) {
    return await this.serviceRepo.findOne({
      where: { usmeUserId: usmeUserId },
      relations: {
        usmeMembName: true,
        usmeUser: true,
      },
    });
  }

  public async Create(
    usmeUserId,
    usmePromoteDate: Date = new Date(),
    usmePoints: number,
    usmeType: string,
    usmeMembName,
    usmeUser,
  ) {
    try {
      const usermembers = await this.serviceRepo.save({
        usmeUserId: usmeUserId,
        usmePromoteDate: usmePromoteDate,
        usmePoints: usmePoints,
        usmeType: usmeType,
        usmeMembName: usmeMembName,
        usmeUser: usmeUser,
      });
      return usermembers;
    } catch (error) {
      return error.mesagge;
    }
  }

  public async Update(
    usmeUserId: number,
    usmePromoteDate: Date = new Date(),
    usmePoints: number,
    usmeType: string,
    usmeMembName,
    usmeUser,
  ) {
    try {
      const usermembers = await this.serviceRepo.update(usmeUserId, {
        usmePromoteDate: usmePromoteDate,
        usmePoints: usmePoints,
        usmeType: usmeType,
        usmeMembName: usmeMembName,
        usmeUser: usmeUser,
      });
      return usermembers;
    } catch (error) {
      return error.mesagge;
    }
  }

  public async Delete(usmeUserId: number) {
    try {
      const usermambers = await this.serviceRepo.delete(usmeUserId);
      return usermambers;
    } catch (error) {
      return error.mesagge;
    }
  }
}
