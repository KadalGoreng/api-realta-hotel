import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'output/entities/Facilities';
import { FacilityPhoto } from 'output/entities/FacilityPhoto';
import { Repository } from 'typeorm';
// import { UploadFacilityPhotoDto, UpdateFacilityPhotoDto } from './facility-photo.dto';

@Injectable()
export class FacilityPhotoService {
  constructor(
    @InjectRepository(FacilityPhoto)
    private facilityPhotoRepo: Repository<FacilityPhoto>,
  ) {}

  public async findAll() {
    return await this.facilityPhotoRepo.find({
      relations: {
        faphoFaci: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.facilityPhotoRepo.findOne({
      where: {
        faphoId: id,
      },
      relations: {
        faphoFaci: true,
      },
    });
  }

  public async findMany(id: number) {
    return await this.facilityPhotoRepo.find({
      where: { faphoFaci: { faciId: id } },
      relations: { faphoFaci: true },
    });
  }

  public async Upload(
    file: any,
    facilityPhotoDetail: {
      faphoPrimary: boolean;
      faphoFaci: Facilities;
    },
  ) {
    try {
      const facilityPhoto = await this.facilityPhotoRepo.save({
        ...facilityPhotoDetail,
        faphoThumbnailFilename: file.filename,
        faphoPhotoFilename: file.filename,
        faphoModifiedDate: new Date(),
      });
      return facilityPhoto;
    } catch (error) {
      return error.message;
    }
  }

  // Use DTO

  // public async Upload(
  //   file: any,
  //   uploadFacilityPhotoDto: UploadFacilityPhotoDto,
  // ) {
  //   try {
  //     const facilityPhoto = await this.facilityPhotoRepo.save({
  //       ...uploadFacilityPhotoDto,
  //       faphoThumbnailFilename: file.filename,
  //       faphoPhotoFilename: file.filename,
  //       faphoModifiedDate: new Date(),
  //     });
  //     return facilityPhoto;
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  public async Update(
    id: number,
    facilityPhotoDetail: {
      faphoPrimary: boolean;
    },
  ) {
    try {
      const hotels = await this.facilityPhotoRepo.update(id, {
        ...facilityPhotoDetail,
        faphoModifiedDate: new Date(),
      });
      return hotels;
    } catch (error) {
      return error.message;
    }
  }

  // Use Dto

  // public async Update(
  //   id: number,
  //   updateFacilityPhotoDto: UpdateFacilityPhotoDto,
  // ) {
  //   try {
  //     const hotels = await this.facilityPhotoRepo.update(id, {
  //       ...updateFacilityPhotoDto,
  //       faphoModifiedDate: new Date(),
  //     });
  //     return hotels;
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  public async Delete(id: number) {
    try {
      const facilityPhoto = await this.facilityPhotoRepo.delete(id);
      return facilityPhoto;
    } catch (error) {
      return error.message;
    }
  }
}
