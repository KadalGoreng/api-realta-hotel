import { Stocks } from 'output/entities/Stocks';
import { Vendor } from 'output/entities/Vendor';

export class CreateVendorProductDto {
  veproQtyStocked: number;
  veproQtyRemaining: number;
  veproPrice: string;
  veproStock: Stocks;
  veproVendor: Vendor;
}

export class UpdateVendorProductDto {
  veproId: number;
  veproQtyStocked: number;
  veproQtyRemaining: number;
  veproPrice: string;
  veproStock: Stocks;
  veproVendor: Vendor;
}

export class filterVendorProductDto {
  name?: string;
  price?: string;
}

export class PaginationOptions {
  page: number;
  limit: number;
}
