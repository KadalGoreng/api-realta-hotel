import { CategoryGroup } from 'output/entities/CategoryGroup';
import { Hotels } from 'output/entities/Hotels';

export class createFacilitiesDto {
  faciName: string;
  faciMaxNumber: number;
  faciMeasureUnit: string;
  faciRoomNumber: string;
  faciStartdate: Date = new Date();
  faciEnddate: Date = new Date();
  faciLowPrice: string;
  faciHighPrice: string;
  faciDiscount: string;
  faciTaxRate: string;
  faciModifiedDate: Date = new Date();
  faciRatePrice: string;
  faciCagro: CategoryGroup;
  faciHotel: Hotels;
}

export class updateFacilitiesDto {
  faciName: string;
  faciMaxNumber: number;
  faciMeasureUnit: string;
  faciRoomNumber: string;
  faciStartdate: Date = new Date();
  faciEnddate: Date = new Date();
  faciLowPrice: string;
  faciHighPrice: string;
  faciDiscount: string;
  faciTaxRate: string;
  faciModifiedDate: Date = new Date();
  faciCagro: CategoryGroup;
  faciHotel: Hotels;
}
