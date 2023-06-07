import { PriceItems } from 'output/entities/PriceItems';

export class priceDto {
  pritName: string;
  pritPrice: string;
  pritDescription: string;
  pritType: string;
}

export class PaginatedPrice {
  data: PriceItems[];
  total: number;
  currentPage: number;
  limit: number;
}

export class PaginationOptions {
  name?: string;
  page: number;
  limit: number;
}
