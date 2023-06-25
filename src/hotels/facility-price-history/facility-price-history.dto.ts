import { Facilities } from 'output/entities/Facilities';

export class CreateFacilityPriceHistoryDto {
  faphStartdate: Date = new Date();
  faphEnddate: Date = new Date();
  faphLowPrice: string;
  faphHighPrice: string;
  faphRatePrice: string;
  faphDiscount: string;
  faphTaxRate: string;
  faphUserId: number;
  faphFaci: Facilities;
}

export class UpdateFacilityPriceHistoryDto {
  id: number;
  faphLowPrice: string;
  faphHighPrice: string;
  faphRatePrice: string;
  faphDiscount: string;
  faphTaxRate: string;
  faphFaci: Facilities;
}
