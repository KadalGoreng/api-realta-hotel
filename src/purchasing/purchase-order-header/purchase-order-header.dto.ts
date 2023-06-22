import { Vendor } from 'output/entities/Vendor';

export class CreatePurchaseOrderHeaderDto {
  poheOrderDate: Date = new Date();
  poheVendor: Vendor;
  poheTotalAmount: string;
  poheStatus: number;
}

export class UpdatePurchaseOrderHeaderDto {
  poheId: number;
  poheStatus: number;
}

export class PaginationOptions {
  vendorName?: string;
  status?: number;
  page: number;
  limit: number;
}
