import { Facilities } from 'output/entities/Facilities';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';

export class CreateStockDetailDto {
  stodStockId: number;
  stodStatus: string;
  stodNotes: string;
  stodFaci: Facilities;
  stodPohe: PurchaseOrderHeader;
}

export class UpdateStockDetailDto {
  stodStockId: number;
  stodId: number;
  stodStatus: string;
  stodNotes: string;
  stodFaci: Facilities;
  stodPohe: PurchaseOrderHeader;
}

export class PaginationOptions {
  page: number;
  limit: number;
}
