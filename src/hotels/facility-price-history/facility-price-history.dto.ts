import { Facilities } from 'output/entities/Facilities';

export class createFacilityPriceHistoryDto {
  faphStartdate: Date = new Date();
  faphEnddate: Date = new Date();
  faphLowPrice: string;
  faphHighPrice: string;
  faphRatePrice: string;
  faphDiscount: string;
  faphTaxRate: string;
  faphModifiedDate: Date = new Date();
  faphUserId: number;
  faphFaci: Facilities;
}

export class updateFacilityPriceHistoryDto {
  faphLowPrice: string;
  faphHighPrice: string;
  faphRatePrice: string;
  faphDiscount: string;
  faphTaxRate: string;
  faphModifiedDate: Date = new Date();
  faphFaci: Facilities;
}
