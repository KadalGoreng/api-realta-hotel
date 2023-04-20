import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FacilityPhoto } from 'output/entities/FacilityPhoto';
import { Repository } from 'typeorm';

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

  public async Upload(files) {
    console.log(files);
    try {
      const facilityPhotos: FacilityPhoto[] = [];
      for (const file of files) {
        const facilityPhoto = await this.facilityPhotoRepo.save({
          faphoThumbnailFilename: file.originalname,
          faphoPhotoFilename: file.originalname,
        });
        facilityPhotos.push(facilityPhoto);
      }
      return facilityPhotos;
    } catch (error) {
      return error.message;
    }
  }

  public async Create(
    faphoId: number,
    faphoFaciId: number,
    faphoPrimary: boolean,
    faphoUrl: string,
    faphoModifiedDate: Date = new Date(),
  ) {
    try {
      const facilityPhoto = await this.facilityPhotoRepo.save({
        faphoId: faphoId,
        faphoFaciId: faphoFaciId,
        faphoPrimary: faphoPrimary,
        faphoUrl: faphoUrl,
        faphoModifiedDate: faphoModifiedDate,
      });
      return facilityPhoto;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    faphoId: number,

    faphoThumbnailFilename: string,
    faphoPhotoFilename: string,
    faphoPrimary: boolean,
    faphoUrl: string,
    faphoModifiedDate: Date = new Date(),
  ) {
    try {
      const facilityPhoto = await this.facilityPhotoRepo.update(
        { faphoId },
        {
          faphoThumbnailFilename: faphoThumbnailFilename,
          faphoPhotoFilename: faphoPhotoFilename,
          faphoPrimary: faphoPrimary,
          faphoUrl: faphoUrl,
          faphoModifiedDate: faphoModifiedDate,
        },
      );
      return facilityPhoto;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const facilityPhoto = await this.facilityPhotoRepo.delete(id);
      return facilityPhoto;
    } catch (error) {
      return error.message;
    }
  }
}
