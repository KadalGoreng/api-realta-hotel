import { Policy } from 'output/entities/Policy';

export class PaginatedPolicy {
  data: Policy[];
  total: number;
  currentPage: number;
  limit: number;
}

export class PaginationOptions {
  name?: string;
  page: number;
  limit: number;
}
