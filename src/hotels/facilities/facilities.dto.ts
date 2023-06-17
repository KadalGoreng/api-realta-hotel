import { CategoryGroup } from 'output/entities/CategoryGroup';
import { Hotels } from 'output/entities/Hotels';

export class CreateFacilitiesDto {
  faciName: string;
  faciMaxNumber: number;
  faciMeasureUnit: string;
  faciRoomNumber: string;
  faciStartdate: Date;
  faciEnddate: Date;
  faciLowPrice: string;
  faciHighPrice: string;
  faciDiscount: string;
  faciTaxRate: string;
  faciRatePrice: string;
  faciCagro: CategoryGroup;
  faciHotel: Hotels;
}

export class UpdateFacilitiesDto {
  id: number;
  faciName: string;
  faciMaxNumber: number;
  faciMeasureUnit: string;
  faciRoomNumber: string;
  faciStartdate: Date;
  faciEnddate: Date;
  faciLowPrice: string;
  faciHighPrice: string;
  faciDiscount: string;
  faciTaxRate: string;
  faciCagro: CategoryGroup;
  faciHotel: Hotels;
}
