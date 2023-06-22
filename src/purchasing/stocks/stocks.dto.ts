export class CreateStocksDto {
  stockName: string;
  stockDescription: string;
  stockQuantity: number;
  stockReorderPoint: number;
  stockUsed: number;
  stockScrap: number;
  stockSize: string;
  stockColor: string;
}

export class UpdateStocksDto {
  stockId: number;
  stockName: string;
  stockDescription: string;
  stockQuantity: number;
  stockReorderPoint: number;
  stockUsed: number;
  stockScrap: number;
  stockSize: string;
  stockColor: string;
}

export class PaginationOptions {
  stockName?: string;
  page: number;
  limit: number;
}

export class PaginationOptionsDetail {
  // stockId?: string;
  page: number;
  limit: number;
}
